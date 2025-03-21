import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <h2 style={styles.subHeading}>Page Not Found</h2>
      <p style={styles.text}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" style={styles.button}>Go to Home</Link>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  container: { textAlign: 'center', marginTop: '50px' },
  heading: { fontSize: '100px', color: '#FF0000', margin: '0' },
  subHeading: { fontSize: '24px', color: '#333' },
  text: { fontSize: '18px', color: '#666' },
  button: { 
    display: 'inline-block', marginTop: '20px', padding: '10px 20px',
    backgroundColor: '#007bff', color: '#fff', textDecoration: 'none',
    borderRadius: '5px', fontSize: '18px'
  }
};

export default PageNotFound;
