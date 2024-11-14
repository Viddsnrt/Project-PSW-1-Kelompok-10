import React, { useState } from 'react';
import './Register.css'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!username || !password || !email) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'admin') {
            reject('Username already taken');
          } else {
            resolve('Registration successful!');
          }
        }, 1000);
      });

      console.log('Registration successful');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="form-inner">
        <h2>REGISTER</h2>
        {error && <div className="error">{error}</div>}
        <div className="content">
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Username"
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'REGISTER'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
