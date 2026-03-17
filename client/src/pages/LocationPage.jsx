import React from 'react'
import { Link, useParams } from 'react-router-dom' 
import { useState, useEffect } from 'react'

import EventCard from "../components/EventCard.jsx"
import "../styles/LocationPage.css"

function LocationPage() {
    const { location } = useParams()

    const [events, setEvents] = useState([])

    useEffect(() => {
        async function getEvents() {
            try {
                const res = await fetch(`http://localhost:3000/events/${location}`)
                const data = await res.json()
                setEvents(data);
            } catch (err) {
                console.log(err)
            }
        }

        getEvents()
    }, [location])

    return (
        <div>
            <Link to="/" className="home-button">
                Home
            </Link>
            <div className="events">
                {events.map((event) => (
                    <EventCard key={event.id} event={event}/>
                ))}
            </div>
        </div>
    )
}   

export default LocationPage