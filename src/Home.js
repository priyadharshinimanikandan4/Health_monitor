import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Inline styles for the component
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      backgroundColor: '#f0f8ff', // Light background color
      minHeight: '100vh',
    },
    heading: {
      fontSize: '2.5rem',
      color: '#2c3e50',
    },
    paragraph: {
      fontSize: '1.2rem',
      color: '#34495e',
      margin: '10px 0',
    },
    subheading: {
      fontSize: '1.8rem',
      color: '#2980b9',
      marginTop: '20px',
    },
    list: {
      listStyleType: 'none',
      padding: '0',
    },
    listItem: {
      fontSize: '1.1rem',
      color: '#16a085',
      margin: '10px 0',
    },
    link: {
      color: '#2980b9',
      fontWeight: 'bold',
      textDecoration: 'none',
      padding: '5px 10px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
    },
    linkHover: {
      backgroundColor: '#2980b9',
      color: 'white',
    },
    image: {
      width: '100%', // Set the image width to 100% to make it responsive
      maxWidth: '600px', // Set a maximum width for the image
      borderRadius: '8px', // Add rounded corners to the image
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Health Monitoring App</h1>
      <p style={styles.paragraph}>Track your health metrics and stay on top of your well-being!</p>

      {/*aaaaAdd image */}
      <img 
        src="\2.jpg" 
        alt=""
        style={styles.image} 
      />

      <div>
        <h2 style={styles.subheading}>Features:</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Monitor daily steps and activity levels</li>
          <li style={styles.listItem}>Track sleep patterns</li>
          <li style={styles.listItem}>Record heart rate and other vital signs</li>
          <li style={styles.listItem}>Set health goals and receive reminders</li>
        </ul>
      </div>

      <div>
        <h2 style={styles.subheading}>Get Started</h2>
        <p style={styles.paragraph}>To start tracking your health, sign up or log in to your account.</p>
        <Link to="/signup" style={styles.link}>
          Sign Up
        </Link>{' '}|{' '}
        <Link to="/login" style={styles.link}>
          Log In
        </Link>
      </div>
    </div>
  );
}

export default Home;
