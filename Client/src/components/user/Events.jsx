import { Link } from 'react-router-dom';
import { eventsData } from '../../data/eventsData';
import './Events.css';

const Events = () => {
    return (
        <section className="events-section container" id="events">
            <div className="section-title">
                <h2 className="techfest-heading glitch" data-text="COMPETITIONS">COMPETITIONS</h2>
            </div>

            <div className="events-grid">
                {eventsData.map((event) => (
                    <div
                        key={event.id}
                        className={`event-card pixel-border card-${event.color}`}
                        data-aos="fade-up"
                    >
                        <div className="card-header">
                            <span className="stage-label">MISSION {event.stageNumber}</span>
                        </div>

                        <div className="card-icon-wrapper">
                            <img src={event.icon} alt={event.title} className="event-icon-img" />
                        </div>


                        <h3 className="event-title pixel-text-shadow">{event.title}</h3>


                        <p className="event-desc">{event.description}</p>

                        <div className="card-footer">
                            <Link to={`/events/${event.id}`} style={{ textDecoration: 'none', width: '100%' }}>

                                <button className={`pixel-btn btn-style-${event.color} w-100 pixel-text-shadow`} style={{ textShadow: '1px 1px 0px rgba(0, 0, 0, 0.5)' }}>EXPLORE</button>

                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;
