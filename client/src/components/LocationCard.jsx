import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/LocationCard.css"

function LocationCard({ slug, name }) {
    return (
        <Link to={`/location/${slug}`}>
            <div className="location-container">
                <h2>{name}</h2>
            </div>
        </Link>
    )
}

export default LocationCard