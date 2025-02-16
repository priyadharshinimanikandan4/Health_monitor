import React, { useState } from 'react';

function ContactUs() {
  // Inline styles for the Contact Us form
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f4f8', // Lighter background color for a clean look
    },
    formContainer: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      width: '450px',
      textAlign: 'center',
      fontFamily: '"Roboto", sans-serif', // New font for a modern look
    },
    heading: {
      fontSize: '2rem',
      color: '#2c3e50',
      marginBottom: '20px',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#2980b9',
    },
    textarea: {
      width: '100%',
      padding: '12px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '1rem',
      height: '120px',
      transition: 'border-color 0.3s ease',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#3498db',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1.1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    buttonHover: {
      backgroundColor: '#2980b9',
      transform: 'scale(1.05)', // Button hover effect
    },
    successMessage: {
      marginTop: '20px',
      color: '#27ae60',
      fontSize: '1.2rem',
      fontWeight: '500',
    },
  };

  const [messageSent, setMessageSent] = useState(false);
  const [focusInput, setFocusInput] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    setMessageSent(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
      <h2>We'd love to hear from you!</h2>
        <p>If you have any questions, feel free to reach out to us!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              ...styles.input,
              ...(focusInput === 'name' ? styles.inputFocus : {}),
            }}
            onFocus={() => setFocusInput('name')}
            onBlur={() => setFocusInput(null)}
          />
          <br />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              ...styles.input,
              ...(focusInput === 'email' ? styles.inputFocus : {}),
            }}
            onFocus={() => setFocusInput('email')}
            onBlur={() => setFocusInput(null)}
          />
          <br />
          <textarea
            placeholder="Your Message"
            style={{
              ...styles.textarea,
              ...(focusInput === 'message' ? styles.inputFocus : {}),
            }}
            onFocus={() => setFocusInput('message')}
            onBlur={() => setFocusInput(null)}
          />
          <br />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Submit
          </button>
        </form>

        {/* Display success message after form submission */}
        {messageSent && (
          <p style={styles.successMessage}>Thank you for reaching out! We will get back to you soon.</p>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
