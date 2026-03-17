import react from "react";
import "../styles/EventCard.css"

function EventCard({ event }) {
    const { title, artist, date, description, location } = event

    return (
        <div className="event-container">
            <div className="title-container">
                <span>{title}</span>
            </div>
            <div className="info-container">
                <div className='inner-info'>
                    <span>Date: {date}</span>
                    <span>Location: {location}</span>
                    <span>Artist: {artist}</span>
                </div>
                <span>{description}</span>
            </div>
        </div>
    )
}

export default EventCard