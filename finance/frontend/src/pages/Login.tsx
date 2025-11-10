import React, { useState } from "react";
import "./Login.css"; // Certifique-se que este import existe

function Login() {
  const [activeTab, setActiveTab] = useState("Login");

  function handleClickLog() {
    setActiveTab("Login");
  }

  function handleClickReg() {
    setActiveTab("Register");
  }

  return (
    // 1. Contêiner principal da página (padronizado)
    <div className="login-page">
      <h1>Acesse sua conta</h1>
      <p>Entre ou crie uma nova conta para começar.</p>

      {/* 2. Contêiner para o formulário (centralizado) */}
      <div className="login-container">
        
        {/* 3. Controles das abas */}
        <div className="tab-controls">
          <button
            className={activeTab === "Login" ? "tab-btn active" : "tab-btn"}
            onClick={handleClickLog}
          >
            Login
          </button>
          <button
            className={activeTab === "Register" ? "tab-btn active" : "tab-btn"}
            onClick={handleClickReg}
          >
            Register
          </button>
        </div>

        {/* 4. Formulários */}
        {activeTab === "Login" ? (
          <form className="login-form">
            <label>Email:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" /> {/* Mudado para password */}
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        ) : (
          <form className="login-form">
            <label>First name:</label>
            <input type="text" />
            <label>Last name:</label>
            <input type="text" />
            <label>Email:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" /> {/* Mudado para password */}
            <label>Confirm password:</label>
            <input type="password" /> {/* Mudado para password */}
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;