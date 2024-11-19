import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        

        // Basic validation
        if (!email) {
            return setError('Email tidak boleh kosong');
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return setError('Format email tidak valid');
        }

        if (password.length < 6) {
            return setError('Password harus terdiri dari minimal 6 karakter');
        }

        navigate('/'); 
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p><a href="/forgot-password">Lupa Password?</a></p>
            <p>Belum punya akun? <a href="/register">Daftar di sini</a></p>
        </div>
    );
};

export default Login;
