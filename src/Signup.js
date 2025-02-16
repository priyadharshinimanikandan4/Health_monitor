import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., create a new user, save to a database)
    console.log('User signed up:', email);

    // Redirect to the Dashboard page after successful signup
    navigate('/dashboard');
  };

  // Inline styles for the signup form
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#ecf0f1', // Light gray background color
    },
    form: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px',
      textAlign: 'center',
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
      backgroundColor: '#2980b9',
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
      color: '###2980b9',
      textDecoration: 'none',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={styles.heading}>Signup</h2>
        <form onSubmit={handleSignup}>
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
            onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor} 
            onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            Signup
          </button>
        </form>
        <a href="/login" style={styles.link}>Already have an account? Login</a>
      </div>
    </div>
  );
}

export default Signup;
