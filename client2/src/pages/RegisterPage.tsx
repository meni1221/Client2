import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { POST } = useFetch("http://localhost:7891");

  const navegate = useNavigate();

  const handelSbmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { name, email, password, role };
    console.log(newUser);
    POST("users",newUser);

    navegate("/login");
  };
  return (
    <div>
      <form onSubmit={handelSbmit}>
        <label htmlFor="name">name</label>
        <input
          type="nane"
          id="name"
          placeholder="Please your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          placeholder="Please enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          placeholder="Please enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <label htmlFor="role">role</label>
        <input
          type="role"
          id="role"
          placeholder="role"
          onChange={(e) => {
            setRole(e.target.value);
          }}
          required
        />

        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
}
