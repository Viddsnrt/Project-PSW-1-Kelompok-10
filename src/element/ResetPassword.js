import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './ResetPassword.css'; 

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (newPassword !== confirmPassword) {
            alert("Password baru dan konfirmasi password tidak cocok.");
            return;
        }

        console.log('Password baru:', newPassword);
        navigate('/Login'); 
    };

    return (
        <div className="reset-password-container">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Password Baru"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Konfirmasi Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
            <p>Kembali ke <a href="/Login">Login</a></p>
        </div>
    );
};

export default ResetPassword;
