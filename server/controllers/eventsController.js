import pool from "../config/database.js"

// get all events
async function getAllEvents(req, res) {
    try {
        const result = await pool.query("SELECT * FROM events ORDER BY date ASC")
        res.json(result.rows)
    } catch (err) {
        console.error("Error fetching events:", err)
        res.status(500).json({ error : "Server error" })
    }
}

// get events by location
async function getEventsByLocation(req, res) {
    const { location } = req.params

    try {
        const result = await pool.query("SELECT * FROM events WHERE location = $1 ORDER BY date ASC",
            [location]
        )
        res.json(result.rows)
    } catch (err) {
        console.error(`Error fetching events for ${location}:`, err)
        res.status(500).json({ error: "Server error" })
    }
}

export default {
    getAllEvents,
    getEventsByLocation
}