import react from "react";

function EventCard({ event }) {
    const { title, artist, date, description, location } = event

    return (
        <div className="event-container">
            <div className="title-container">
                <span>{title}</span>
            </div>
            <div className="info-container">
                <div className='inner-info'>
                    <span>{date}</span>
                    <span>{location}</span>
                    <span>{artist}</span>
                </div>
                <span>{description}</span>
            </div>
        </div>
    )
}

export default EventCard