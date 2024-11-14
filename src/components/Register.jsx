import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el registro del usuario, por ejemplo, enviar los datos a tu backend
    alert('Usuario registrado con éxito');
  };

  return (
    <div className="screen-container">
      <h2 className="screen-title">Registrarse</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      <p className="info-text">
        ¿Ya tienes cuenta? <a href="/">Inicia sesión aquí</a>
      </p>
    </div>
  );
};

export default Register;
