import React, { useState } from 'react';
import './ChangeCredentialsPopup.css';

const ChangeCredentialsPopup = ({ isOpen, onClose, onSave }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({ username: '', password: '', confirmPassword: '' });
    const [passwordRequirements, setPasswordRequirements] = useState([]);

    const validatePassword = (password) => {
        let requirements = [];

        if (password.length < 8) {
            requirements.push('Password must be at least 8 characters long');
        }
        if (password.length > 15) {
            requirements.push('Password must be less than 15 characters long');
        }
        if (password.search(/\d/) === -1) {
            requirements.push('Password must contain at least one number');
        }
        if (password.search(/[!@#$%^&*]/) === -1) {
            requirements.push('Password must contain at least one special character');
        }
        if (password.search(/\s/) !== -1) {
            requirements.push('Password must not contain any whitespace');
        }
        if (password.search(/[A-Z]/) === -1) {
            requirements.push('Password must contain at least one uppercase letter');
        }
        if (password.search(/[a-z]/) === -1) {
            requirements.push('Password must contain at least one lowercase letter');
        }

        setPasswordRequirements(requirements);

        return requirements.length === 0;
    };

    const handleSave = () => {
        const isPasswordValid = validatePassword(password);
        const doPasswordsMatch = password === confirmPassword;

        if (isPasswordValid && doPasswordsMatch) {
            onSave(username, password);
        } else {
            setError({
                ...error,
                password: isPasswordValid ? '' : 'Password does not meet the requirements',
                confirmPassword: doPasswordsMatch ? '' : 'Passwords do not match'
            });
        }
    };

    const handlePasswordChange = (password) => {
        setPassword(password);
        validatePassword(password);
    };

    if (!isOpen) return null;

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Change Credentials</h2>
                <input
                    type="text"
                    placeholder="New Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                />
                {passwordRequirements.map((req, index) => (
                    <div key={index} className="password-requirement">
                        {req}
                    </div>
                ))}
                <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error.password && <p className="error">{error.password}</p>}
                {error.confirmPassword && <p className="error">{error.confirmPassword}</p>}

                <button onClick={onClose}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default ChangeCredentialsPopup;
