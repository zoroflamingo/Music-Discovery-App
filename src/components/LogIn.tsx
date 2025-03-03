import "./LogIn.css";
import { useState } from "react";

function LogIn() {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    if (name === "pswd") setPswd(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Name:", name);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Username: </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:{""}</label>
        <input
          id="password"
          type="password"
          name="password"
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
