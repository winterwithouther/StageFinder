import React from 'react'
import LocationCard from "../components/LocationCard.jsx"
import Header from "../components/Header.jsx"

function Home() {
    const locations = [
        { name: "Underground Club", slug: "underground-club"},
        { name: "Riverside Amphitheater", slug: "riverside-amphitheater" },
        { name: "Downtown Arena", slug: "downtown-arena" },
        { name: "City Park Stage", slug: "city-park-stage" },
    ]

    return (
        <div className="homepage-container">
            <Header/>
            <div className="locations-container">
                {locations.map((location) => (
                    <LocationCard key={location.slug} slug={location.slug} name={location.name}/>
                ))}
            </div>
        </div>
    )
}

export default Home