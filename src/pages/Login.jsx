import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
