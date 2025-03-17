import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../db";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

// 🔹 SIGNUP ROUTE
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Check if user exists
    const userExists = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if (userExists.rows.length > 0) {
      res.status(400).json({ message: "Username already taken" });
      return;
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Insert into database
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING user_id, username, created_at",
      [username, email, hashedPassword]
    );
    res.status(201).json({ message: "User registered", user: newUser.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🔹 LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if (user.rows.length === 0) {
      res.status(400).json({ message: "Invalid username or password" });
      return;
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.rows[0].password_hash);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid username or password" });
      return;
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user.rows[0].id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
