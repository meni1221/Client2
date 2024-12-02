import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate()

  const handelSbmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await authContext?.login({ email, password });
    navegate("/admin")
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  return (
    <form onSubmit={handelSbmit}>
      <label htmlFor="email">email</label>
      <input 
      type="email" 
      id="email"
      placeholder="Please enter an email"
      value={email} 
      onChange={handleInputChange}
      required
      />
      <label htmlFor="password">password</label>
      <input 
      type="password" 
      id="password"
      placeholder="Please enter an password"
      value={password} 
      onChange={handleInputChange}
      required
      />

        <button type="submit" >LOGIN</button>
    </form>
  );
}
