import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./LoginPage.css";
import pizzaImage from "../assets/image/imagelogin.png"; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
   
    console.log("E-mail:", email, "Senha:", password);

   
    navigate("/admin");
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={pizzaImage} alt="Ilustração" />
      </div>
      <div className="form-section">
        <form onSubmit={handleLogin}>
          
          <h2>LOGIN</h2>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">ENTRAR</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
