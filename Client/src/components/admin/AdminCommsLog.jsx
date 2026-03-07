import React, { useState, useMemo, useRef } from 'react';

const AdminCommsLog = () => {
    const tableContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (tableContainerRef.current) {
            tableContainerRef.current.scrollTo({
                top: tableContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    // Mock registration data for the "Viewing Data" functionality
    const [registrations, setRegistrations] = useState([
        { id: '1001', event: 'MINI MILITIA', player: 'ShadowNinja', teamSize: 'SQUAD', status: 'PAID', time: '10:45 AM' },
        { id: '1002', event: 'VIBE CODING', player: 'NullPointer', teamSize: 'SOLO', status: 'PENDING', time: '11:15 AM' },
        { id: '1003', event: 'E-FOOTBALL', player: 'MessiFan99', teamSize: 'SOLO', status: 'PAID', time: '12:05 PM' }
    ]);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredRegistrations = useMemo(() => {
        if (!searchQuery) return registrations;
        const lower = searchQuery.toLowerCase();
        return registrations.filter(reg =>
            reg.id.toLowerCase().includes(lower) ||
            reg.event.toLowerCase().includes(lower) ||
            reg.player.toLowerCase().includes(lower) ||
            reg.status.toLowerCase().includes(lower) ||
            reg.teamSize.toLowerCase().includes(lower)
        );
    }, [registrations, searchQuery]);

    return (
        <div className="view-container">
            <div className="tab-header">
                <h2 className="tab-title text-arcade-blue">INCOMING TRANSMISSIONS</h2>
                <div className="search-box">
                    <span className="search-icon">&gt;</span>
                    <input
                        type="text"
                        className="pixel-input search-input"
                        placeholder="FILTER LOGS..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="table-wrapper" ref={tableContainerRef}>
                <button className="scroll-down-btn blink-text-subtle" onClick={scrollToBottom}>
                    ▼ SCROLL DOWN
                </button>
                <table className="pixel-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>STAGE LOG</th>
                            <th>OPERATOR</th>
                            <th>SQUAD</th>
                            <th>FEE STATUS</th>
                            <th>TIMESTAMP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRegistrations.map(reg => (
                            <tr key={reg.id}>
                                <td>#{reg.id}</td>
                                <td className="text-arcade-pink">{reg.event}</td>
                                <td>{reg.player}</td>
                                <td>{reg.teamSize}</td>
                                <td className={reg.status === 'PAID' ? 'text-arcade-green' : 'text-arcade-yellow'}>
                                    {reg.status}
                                </td>
                                <td>{reg.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminCommsLog;
