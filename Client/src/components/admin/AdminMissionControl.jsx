import React, { useState, useEffect, useRef } from 'react';
import api from '../../utils/axios';

const AdminMissionControl = () => {
  const tableContainerRef = useRef(null);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eventStatuses, setEventStatuses] = useState({});
  const [adminType, setAdminType] = useState('');
  const [adminEventNames, setAdminEventNames] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get('/eventsStatus');
        const fetchedEvents = response.data.events || [];
        setEvents(fetchedEvents);
        setAdminType(response.data.adminType || '');
        setAdminEventNames(response.data.adminEventNames || []);

        const initialStatuses = fetchedEvents.reduce((acc, event) => {
          acc[event._id] = event.currentSts || 'Yet to start';
          return acc;
        }, {});
        setEventStatuses(initialStatuses);
      } catch (err) {
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleStatusChange = async (eventId, newStatus) => {
    try {
      // Optomistic UI update
      setEventStatuses(prev => ({
        ...prev,
        [eventId]: newStatus
      }));

      // Push to database
      await api.put(`/eventsStatus/${eventId}`, { currentSts: newStatus });

    } catch (err) {
      console.error('Error updating event status:', err);
      alert('Failed to update event status');

      // Revert optimism if failed (optional, simplest is to just refresh or let them try again)
      const originalStatus = events.find(e => e._id === eventId)?.currentSts || 'Yet to start';
      setEventStatuses(prev => ({
        ...prev,
        [eventId]: originalStatus
      }));
    }
  };

  return (
    <div className="view-container">
      <h2 className="tab-title text-arcade-yellow">MISSION TIMELINE STATUS</h2>
      <div className="table-wrapper" ref={tableContainerRef}>
        {loading ? (
          <div style={{ color: '#fff', textAlign: 'center', padding: '20px', fontFamily: '"Press Start 2P"' }} className="blink-text">LOADING...</div>
        ) : (
          <table className="pixel-table">
            <thead>
              <tr>
                <th>MISSION (EVENT)</th>
                <th>LOCATION</th>
                <th>SCHEDULE</th>
                <th>CURRENT STATUS</th>
                {['Student Admin', 'Superior Admin'].includes(adminType) && (
                  <th>ACTION</th>
                )}
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event._id}>
                  <td className="text-arcade-blue font-bold">{event.name}</td>
                  <td>{event.loc}</td>
                  <td className="text-arcade-pink">{event.schedule}</td>
                  <td>
                    <span className={`status-badge stat-${(eventStatuses[event._id] || 'Yet to start').replace(/\s+/g, '-').toLowerCase()}`}>
                      {(eventStatuses[event._id] || 'Yet to start').toUpperCase()}
                    </span>
                  </td>
                  {['Student Admin', 'Superior Admin'].includes(adminType) && (
                    <td>
                      <select
                        className="pixel-select"
                        value={eventStatuses[event._id] || 'Yet to start'}
                        onChange={(e) => handleStatusChange(event._id, e.target.value)}
                        disabled={adminType === 'Student Admin' && !adminEventNames.includes(event.name)}
                        style={{ cursor: adminType === 'Student Admin' && !adminEventNames.includes(event.name) ? 'not-allowed' : 'pointer', opacity: adminType === 'Student Admin' && !adminEventNames.includes(event.name) ? 0.5 : 1 }}
                      >
                        <option value="Yet to start">YET TO START</option>
                        <option value="In Progress">IN PROGRESS</option>
                        <option value="Delayed">DELAYED</option>
                        <option value="Completed">COMPLETED</option>
                      </select>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminMissionControl;
