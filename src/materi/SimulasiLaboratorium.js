import React, { useState } from 'react';
import './SimulasiLaboratorium.css';

const SimulasiLaboratorium = () => {
    const [phValue, setPhValue] = useState('');
    const [result, setResult] = useState('');

    const handlePhChange = (e) => {
        setPhValue(e.target.value);
    };

    const measurePh = () => {
        if (phValue < 7) {
            setResult('Larutan bersifat asam.');
        } else if (phValue > 7) {
            setResult('Larutan bersifat basa.');
        } else {
            setResult('Larutan bersifat netral.');
        }
    };

    return (
        <div className="lab-container">
            <h1>Simulasi Laboratorium Virtual</h1>
            <div className="ph-section">
                <h2>Mengukur pH Larutan</h2>
                <input 
                    type="number" 
                    value={phValue} 
                    onChange={handlePhChange} 
                    placeholder="Masukkan nilai pH"
                />
                <button onClick={measurePh}>Ukur pH</button>
                {result && <p className="result">{result}</p>}
            </div>
            <div className="titration-section">
                <h2>Simulasi Titrasi</h2>
                <p>Fitur ini akan segera hadir!</p>
            </div>
        </div>
    );
};

export default SimulasiLaboratorium;
