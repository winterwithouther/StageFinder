import express from 'express'
import cors from 'cors'
import eventsRoutes from "./routes/eventsRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3000

app.get('/', (req, res) => {
    res.json({ message : "StageFinder API is running" })
})

app.use("/events", eventsRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
