import "./LogIn.css";
import { useState } from "react";

function LogIn() {
  const [username, setUsername] = useState("");
  const [pswd, setPswd] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "username") setUsername(value);
    if (name === "pswd") setPswd(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Name:", username);
    const userData = {
      username,
      password: pswd, // Send the password (will be hashed in the backend)
    };

    try {
      // Send POST request to backend for signup
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful", data);
        // Handle success (e.g., navigate to login page or home page)
      } else {
        console.error("Login failed", data);
        // Handle error (show an error message to the user)
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:{""}</label>
        <input
          id="password"
          type="password"
          name="pswd"
          value={pswd}
          onChange={handleChange}
          required
        />
      </div>
      <input type="submit" value="submit" />
    </form>
  );
}

export default LogIn;
