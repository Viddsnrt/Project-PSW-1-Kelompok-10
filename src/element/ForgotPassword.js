import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email tidak valid');
            return;
        }
        
        setError('');
        
        try {
            console.log('Email untuk reset password:', email);
            setSuccess('Link reset password telah dikirim ke email Anda.');
            setEmail('');

            setTimeout(() => {
                navigate('/reset-password');
            }, 2000);
        } catch (err) {
            setError('Terjadi kesalahan, silakan coba lagi.');
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Lupa Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Kirim Link Reset Password</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <p>Kembali ke <a href="/Login">Login</a></p>
        </div>
    );
};

export default ForgotPassword;
