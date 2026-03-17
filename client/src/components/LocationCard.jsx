import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/LocationCard.css"

function LocationCard({ slug, name }) {
    return (
        <Link to={`/locations/${slug}`} className="location-card-link">
            <div className="location-card">
                <h2>{name}</h2>
            </div>
        </Link>
    )
}

export default LocationCard