import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Iniciar Sesión</h2>
      <form>
        <input type="email" placeholder="Correo Electrónico" required /><br />
        <input type="password" placeholder="Contraseña" required /><br />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p>
    </div>
  );
};

export default Login;
