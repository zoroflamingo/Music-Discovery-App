import "./SignUp.css";
import { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [pswdRep, setPswdRep] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "pswd") setPswd(value);
    if (name === "pswdRep") setPswdRep(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Name:", name);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
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
          name="password"
          value={pswd}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Repeat password:{""}</label>
        <input
          id="passwordRep"
          type="password"
          name="passwordRep"
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
