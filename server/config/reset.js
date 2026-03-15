import eventsData from '../data/events.js'
import "./dotenv.js"
import pool from "./database.js"

async function createEventsTable() {
    const createEventsQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        artist VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        date VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        submittedOn TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
    `

    try {
        const res = await pool.query(createEventsQuery)
        console.log('🎉 events table created successfully')
    } catch (err) {
        console.error('⚠️ error creating events table', err)
    }
}

async function seedEventsTable() {
    await createEventsTable()

    eventsData.forEach((event) => {
        const insertQuery = {
            text: 'INSERT INTO events (title, artist, location, date, description) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            event.title,
            event.artist,
            event.location,
            event.date,
            event.description
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err)
                return
            }

            console.log(`✅ ${event.title} added successfully`)
        })
    })
}

seedEventsTable()