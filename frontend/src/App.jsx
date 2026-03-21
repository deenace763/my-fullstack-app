import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hello/')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Failed to connect to backend ❌'))
  }, [])

  return (
    <div style={styles.wrapper}>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>MyApp</h1>
        <div style={styles.navLinks}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>About</a>
          <a href="#" style={styles.link}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main style={styles.hero}>
        <h2 style={styles.heroTitle}>Welcome to MyApp 👋</h2>
        <p style={styles.heroSub}>{message}</p>
        <button style={styles.button}>Get Started</button>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 MyApp. All rights reserved.</p>
      </footer>

    </div>
  );
}

const styles = {
  wrapper: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    backgroundColor: '#1a1a2e',
    color: 'white',
  },
  logo: {
    margin: 0,
    fontSize: '24px',
    color: '#e94560',
  },
  navLinks: {
    display: 'flex',
    gap: '24px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  },
  hero: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    padding: '48px 24px',
  },
  heroTitle: {
    fontSize: '48px',
    color: '#1a1a2e',
    marginBottom: '16px',
  },
  heroSub: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '32px',
  },
  button: {
    padding: '14px 32px',
    fontSize: '16px',
    backgroundColor: '#e94560',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center',
    padding: '16px',
    backgroundColor: '#1a1a2e',
    color: '#aaa',
    fontSize: '14px',
  },
};

export default App;