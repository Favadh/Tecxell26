import React, { useState } from 'react';
import './RegistrationModal.css';

const RegistrationModal = ({ eventTitle, eventColor, isTeamEvent, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        playerName: '',
        playerEmail: '',
        playerPhone: '',
        squadSize: '1',
        player2Name: '',
        player3Name: '',
        player4Name: '',
        transactionId: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request (AJAX/Fetch)
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Wait a moment then inform parent
            setTimeout(() => {
                onSubmit(formData);
                onClose();
            }, 2000);
        }, 1500);
    };

    return (
        <div className="modal-overlay">
            <div className={`modal-content pixel-border card-${eventColor}`}>
                <button className="close-btn" onClick={onClose}>X</button>

                <h2 className="modal-title pixel-text-shadow">
                    JOIN: {eventTitle}
                </h2>

                {isSuccess ? (
                    <div className="success-message blink-text text-arcade-green">
                        <p>TRANSMISSION RECEIVED.</p>
                        <p>REGISTRATION SUCCESSFUL.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="retro-form">
                        <div className="form-group">
                            <label>PLAYER NAME</label>
                            <input
                                type="text"
                                name="playerName"
                                className="pixel-input"
                                placeholder="ENTER ALIAS..."
                                value={formData.playerName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>COMM-LINK (EMAIL)</label>
                            <input
                                type="email"
                                name="playerEmail"
                                className="pixel-input"
                                placeholder="ENTER EMAIL..."
                                value={formData.playerEmail}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>DIRECT LINE (PHONE)</label>
                            <input
                                type="tel"
                                name="playerPhone"
                                className="pixel-input"
                                placeholder="ENTER NUMBER..."
                                value={formData.playerPhone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {isTeamEvent && (
                            <div className="form-group">
                                <label>SQUAD SIZE</label>
                                <select
                                    name="squadSize"
                                    className="pixel-input"
                                    value={formData.squadSize}
                                    onChange={handleChange}
                                >
                                    <option value="1">SOLO (1)</option>
                                    <option value="2">DUO (2)</option>
                                    <option value="3">TRIO (3)</option>
                                    <option value="4">SQUAD (4)</option>
                                </select>
                            </div>
                        )}

                        {isTeamEvent && parseInt(formData.squadSize) >= 2 && (
                            <div className="form-group">
                                <label>PLAYER 2 NAME</label>
                                <input
                                    type="text"
                                    name="player2Name"
                                    className="pixel-input"
                                    placeholder="ENTER 2ND ALIAS..."
                                    value={formData.player2Name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        {isTeamEvent && parseInt(formData.squadSize) >= 3 && (
                            <div className="form-group">
                                <label>PLAYER 3 NAME</label>
                                <input
                                    type="text"
                                    name="player3Name"
                                    className="pixel-input"
                                    placeholder="ENTER 3RD ALIAS..."
                                    value={formData.player3Name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        {isTeamEvent && parseInt(formData.squadSize) >= 4 && (
                            <div className="form-group">
                                <label>PLAYER 4 NAME</label>
                                <input
                                    type="text"
                                    name="player4Name"
                                    className="pixel-input"
                                    placeholder="ENTER 4TH ALIAS..."
                                    value={formData.player4Name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="payment-section">
                            <h3 className="payment-title">PAYMENT VERIFICATION</h3>
                            <div className="qr-container">
                                {/* Using a placeholder pixel art or QR code lookalike */}
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=techfest@upi&pn=Tecxell2026&cu=INR"
                                    alt="Payment QR Code"
                                    className="qr-code-img"
                                />
                                <p className="qr-instruction">SCAN TO PAY REGISTRATION FEE</p>
                            </div>

                            <div className="form-group">
                                <label>TRANSACTION ID</label>
                                <input
                                    type="text"
                                    name="transactionId"
                                    className="pixel-input"
                                    placeholder="ENTER TXN REF NO..."
                                    value={formData.transactionId}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={`submit-btn btn-style-${eventColor}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'UPLOADING...' : 'CONFIRM REGISTRATION'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegistrationModal;
