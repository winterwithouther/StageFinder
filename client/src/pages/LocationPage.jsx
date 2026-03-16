import React from 'react'
import { useParams } from 'react-router-dom' 
import { useState, useEffect } from 'react'

import EventCard from "../components/EventCard.jsx"

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
            {events.map((event) => (
                <EventCard key={event.id} event={event}/>
            ))}
        </div>
    )
}   

export default LocationPage