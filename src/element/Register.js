import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './Register.css'; 

const Register = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!fullname.trim()) {
            setError('Nama lengkap tidak boleh kosong');
            return;
        }
        if (!validateEmail(email)) {
            setError('Email tidak valid');
            return;
        }
        if (password.length < 6) {
            setError('Password harus terdiri dari minimal 6 karakter');
            return;
        }

        // Simulate saving user data in localStorage
        const userData = { fullname, email, password };
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('isRegistered', 'true'); // Mark user as registered

        setError('');
        navigate('/Login'); // Redirect to login page
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullname">Nama Lengkap</label>
                    <input
                        type="text"
                        id="fullname"
                        placeholder="Nama Lengkap"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required
                    />
                </div>
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
                <button type="submit">Daftar</button>
            </form>
            <p>Sudah punya akun? <a href="/Login">Login di sini</a></p>
        </div>
    );
};

export default Register;
