import React, { useState, useEffect, useRef } from 'react';
import api from '../../utils/axios';

const AdminMissionControl = () => {
  const tableContainerRef = useRef(null);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eventStatuses, setEventStatuses] = useState({});
  const [adminType, setAdminType] = useState('');
  const [adminEventNames, setAdminEventNames] = useState([]);
  const [visibleTooltips, setVisibleTooltips] = useState({});

  const triggerTooltip = (eventId) => {
    setVisibleTooltips(prev => ({ ...prev, [eventId]: true }));
    setTimeout(() => {
      setVisibleTooltips(prev => ({ ...prev, [eventId]: false }));
    }, 3000);
  };

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
          // If already completed or locked, trigger the tooltip once on load
          if (event.currentSts === 'Completed') {
            triggerTooltip(event._id);
          }
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

      // Trigger tooltip if completed is selected
      if (newStatus === 'Completed') {
        triggerTooltip(eventId);
      }

      // Push to database
      const response = await api.put(`/eventsStatus/${eventId}`, { currentSts: newStatus });
      
      // Update the local events array with the new data from server to capture completedAt timestamp
      if (response.data && response.data.event) {
          setEvents(prevEvents => prevEvents.map(e => e._id === eventId ? response.data.event : e));
      }

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

  const isEventLocked = (event) => {
      if (event.currentSts !== 'Completed' || !event.completedAt) return false;
      const completedTime = new Date(event.completedAt).getTime();
      const currentTime = new Date().getTime();
      const oneHour = 60 * 60 * 1000;
      return (currentTime - completedTime) > oneHour;
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
              {events.map(event => {
                  const locked = isEventLocked(event);
                  const isAssigned = adminEventNames.includes(event.name);
                  const canEdit = !locked && (adminType === 'Superior Admin' || (adminType === 'Student Admin' && isAssigned));
                  
                  return (
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
                        <td style={{ position: 'relative' }}>
                          <select
                            className="pixel-select"
                            value={eventStatuses[event._id] || 'Yet to start'}
                            onChange={(e) => handleStatusChange(event._id, e.target.value)}
                            disabled={!canEdit}
                            style={{ 
                                cursor: !canEdit ? 'not-allowed' : 'pointer', 
                                opacity: !canEdit ? 0.5 : 1,
                                border: locked ? '1px solid var(--arcade-red)' : ''
                            }}
                          >
                            <option value="Yet to start">YET TO START</option>
                            <option value="In Progress">IN PROGRESS</option>
                            <option value="Delayed">DELAYED</option>
                            <option value="Completed">COMPLETED</option>
                          </select>

                          {/* Premium Styled Tooltip - Now temporary */}
                          {visibleTooltips[event._id] && (
                            <div className="pixel-tooltip" style={{
                                position: 'absolute',
                                top: '-35px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: locked ? 'var(--arcade-red)' : 'var(--arcade-yellow)',
                                color: locked ? '#fff' : '#000',
                                padding: '5px 10px',
                                fontSize: '0.7rem',
                                whiteSpace: 'nowrap',
                                borderRadius: '4px',
                                fontWeight: 'bold',
                                zIndex: 10,
                                boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                pointerEvents: 'none',
                                animation: 'fadeIn 0.2s ease-out'
                            }}>
                                {locked ? "LOCKED AFTER 1HR" : "LOCKED AFTER 1HR"}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-5px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '0',
                                    height: '0',
                                    borderLeft: '5px solid transparent',
                                    borderRight: '5px solid transparent',
                                    borderTop: `5px solid ${locked ? 'var(--arcade-red)' : 'var(--arcade-yellow)'}`,
                                }}></div>
                            </div>
                          )}
                        </td>
                      )}
                    </tr>
                  )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminMissionControl;
