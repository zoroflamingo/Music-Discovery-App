import "./SignUp.css";
import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [pswdRep, setPswdRep] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "username") setUsername(value);
    if (name === "email") setEmail(value);
    if (name === "pswd") setPswd(value);
    if (name === "pswdRep") setPswdRep(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pswd !== pswdRep) {
      alert("Passwords do not match!");
      return;
    }
    const userData = {
      username,
      email,
      password: pswd, // Send the password (will be hashed in the backend)
    };

    try {
      // Send POST request to backend for signup
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Signup successful", data);
        alert("Signup successful");
        // Handle success (e.g., navigate to login page or home page)
      } else {
        console.error("Signup failed", data);
        alert("Signup failed");
        // Handle error (show an error message to the user)
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
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
        <label htmlFor="email">Email:{""}</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
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
      <div className="form-group">
        <label htmlFor="passwordRep">Repeat password:{""}</label>
        <input
          id="passwordRep"
          type="password"
          name="pswdRep"
          value={pswdRep}
          onChange={handleChange}
          required
        />
      </div>
      <input type="submit" value="submit" />
    </form>
  );
}

export default SignUp;
