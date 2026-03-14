import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/axios';
import AdminCommsLog from './AdminCommsLog';
import AdminMissionControl from './AdminMissionControl';
import AdminWinners from './AdminWinners';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('data'); // 'data' or 'timer'
    const [adminName, setAdminName] = useState('LOADING...');

    useEffect(() => {
        const fetchAdminProfile = async () => {
            try {
                const response = await api.get('/adminProfile');
                setAdminName(response.data.name || 'ADMIN');
            } catch (err) {
                console.error('Error fetching admin profile:', err);
                setAdminName('ADMIN');
            }
        };
        fetchAdminProfile();
    }, []);

    const handleLogout = () => {
        console.log('User logging out...');
        localStorage.removeItem('token');
        navigate('/admin');
        alert('Logged out successfully!');
    };

    return (
        <div className="admin-dashboard-page">
            <div className="admin-sidebar pixel-border border-blue">
                <div className="admin-profile">
                    <h2 className="pixel-text-shadow-blue">{adminName.toUpperCase()}</h2>
                    <p className="online-status blink-text">● ONLINE</p>
                </div>

                <nav className="admin-nav">
                    <button
                        className={`admin-nav-item ${activeTab === 'data' ? 'active' : ''}`}
                        onClick={() => setActiveTab('data')}
                    >
                        &gt; COMMS LOG (DATA)
                    </button>
                    <button
                        className={`admin-nav-item ${activeTab === 'timer' ? 'active' : ''}`}
                        onClick={() => setActiveTab('timer')}
                    >
                        &gt; MISSION CONTROL (EVENTS)
                    </button>
                    <button
                        className={`admin-nav-item ${activeTab === 'winners' ? 'active' : ''}`}
                        onClick={() => setActiveTab('winners')}
                    >
                        &gt; WINNERS BOARD
                    </button>
                    <button className="admin-nav-item logout" onClick={handleLogout}>
                        [ LOGOUT ]
                    </button>
                </nav>
            </div>

            <div className="admin-content-area pixel-border">
                <div className="mobile-rotate-warning blink-text text-arcade-red">
                    ⚠ ROTATE DEVICE FOR OPTIMAL VIEWING ⚠
                </div>
                {activeTab === 'data' && <AdminCommsLog />}
                {activeTab === 'timer' && <AdminMissionControl />}
                {activeTab === 'winners' && <AdminWinners />}
            </div>
        </div>
    );
};

export default AdminDashboard;
