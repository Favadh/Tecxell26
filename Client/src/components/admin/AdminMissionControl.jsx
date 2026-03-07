import React, { useState, useRef } from 'react';
import { eventsData } from '../../data/eventsData';

const AdminMissionControl = () => {
  const tableContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollTo({
        top: tableContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  // Local state for event statuses
  const [eventStatuses, setEventStatuses] = useState(
    eventsData.reduce((acc, event) => {
      acc[event.id] = 'YET TO START';
      return acc;
    }, {})
  );

  const handleStatusChange = (eventId, newStatus) => {
    setEventStatuses(prev => ({
      ...prev,
      [eventId]: newStatus
    }));
  };

  return (
    <div className="view-container">
      <h2 className="tab-title text-arcade-yellow">MISSION TIMELINE STATUS</h2>
      <div className="table-wrapper" ref={tableContainerRef}>
        <button className="scroll-down-btn blink-text-subtle" onClick={scrollToBottom}>
          ▼ SCROLL DOWN
        </button>
        <table className="pixel-table">
          <thead>
            <tr>
              <th>MISSION (EVENT)</th>
              <th>LOCATION</th>
              <th>SCHEDULE</th>
              <th>CURRENT STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {eventsData.map(event => (
              <tr key={event.id}>
                <td className="text-arcade-blue font-bold">{event.title}</td>
                <td>{event.venue}</td>
                <td className="text-arcade-pink">{event.time}</td>
                <td>
                  <span className={`status-badge stat-${eventStatuses[event.id].replace(/\s+/g, '-').toLowerCase()}`}>
                    {eventStatuses[event.id]}
                  </span>
                </td>
                <td>
                  <select
                    className="pixel-select"
                    value={eventStatuses[event.id]}
                    onChange={(e) => handleStatusChange(event.id, e.target.value)}
                  >
                    <option value="YET TO START">YET TO START</option>
                    <option value="IN PROGRESS">IN PROGRESS</option>
                    <option value="DELAYED">DELAYED</option>
                    <option value="COMPLETED">COMPLETED</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMissionControl;
