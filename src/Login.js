import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('User logged in:', email);
    navigate('/dashboard');
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#ecf0f1',
    },
    form: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px',
      textAlign: 'center',
    },
    image: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginBottom: '20px',
      objectFit: 'cover',
    },
    heading: {
      fontSize: '1.8rem',
      color: '#2c3e50',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#29849',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1.1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#e0f7fa',
    },
    link: {
      display: 'block',
      marginTop: '15px',
      color: '##e0f7fa',
      textDecoration: 'none',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <img
          src="\3.jpg" // Replace with the path to your uploaded image
          alt="Login"
          style={styles.image}
        />
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin}>
          
          <input
          
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Login
          </button>
        </form>
        <a href="/signup" style={styles.link}>Don't have an account? Sign Up</a>
      </div>
    </div>
  );
}

export default Login;
