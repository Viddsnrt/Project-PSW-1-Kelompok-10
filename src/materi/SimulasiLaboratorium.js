import React, { useState } from 'react';
import './SimulasiLaboratorium.css';

const SimulasiLaboratorium = () => {
    const [phValue, setPhValue] = useState('');
    const [result, setResult] = useState('');
    const [acidVolume, setAcidVolume] = useState('');
    const [baseVolume, setBaseVolume] = useState('');
    const [titrationResult, setTitrationResult] = useState('');

    // Menghitung pH
    const handlePhChange = (e) => {
        setPhValue(e.target.value);
    };

    const measurePh = () => {
        if (phValue === '') {
            setResult('Masukkan nilai pH terlebih dahulu!');
            return;
        }

        const ph = parseFloat(phValue);
        if (ph < 7) {
            setResult('Larutan bersifat asam.');
        } else if (ph > 7) {
            setResult('Larutan bersifat basa.');
        } else {
            setResult('Larutan bersifat netral.');
        }
    };

    // Simulasi Titrasi
    const handleAcidChange = (e) => setAcidVolume(e.target.value);
    const handleBaseChange = (e) => setBaseVolume(e.target.value);

    const performTitration = () => {
        if (acidVolume === '' || baseVolume === '') {
            setTitrationResult('Masukkan volume larutan asam dan basa!');
            return;
        }

        const acid = parseFloat(acidVolume);    
        const base = parseFloat(baseVolume);

        if (acid === base) {
            setTitrationResult('Larutan mencapai titik ekivalen (netral).');
        } else if (acid > base) {
            setTitrationResult('Larutan bersifat asam setelah titrasi.');
        } else {
            setTitrationResult('Larutan bersifat basa setelah titrasi.');
        }
    };

    return (
        <div className="lab-container">
            <h1>Simulasi Laboratorium Virtual</h1>

            {/* Pengukuran pH */}
            <div className="ph-section">
                <h2>Mengukur pH Larutan</h2>
                <input 
                    type="number" 
                    value={phValue} 
                    onChange={handlePhChange} 
                    placeholder="Masukkan nilai pH" 
                />
                <button onClick={measurePh}>Ukur pH</button>
                {result && (
                    <p 
                        className={`result ${
                            result.includes('asam')
                                ? 'acid'
                                : result.includes('basa')
                                ? 'base'
                                : 'neutral'
                        }`}
                    >
                        {result}
                    </p>
                )}
            </div>

            {/* Simulasi Titrasi */}
            <div className="titration-section">
                <h2>Simulasi Titrasi</h2>
                <div className="input-group">
                    <input 
                        type="number" 
                        value={acidVolume} 
                        onChange={handleAcidChange} 
                        placeholder="Volume asam (mL)" 
                    />
                    <input 
                        type="number" 
                        value={baseVolume} 
                        onChange={handleBaseChange} 
                        placeholder="Volume basa (mL)" 
                    />
                </div>
                <button onClick={performTitration}>Hitung Titrasi</button>
                {titrationResult && <p className="result">{titrationResult}</p>}
            </div>
        </div>
    );
};

export default SimulasiLaboratorium;
