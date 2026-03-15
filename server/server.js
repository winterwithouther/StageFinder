import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3000

app.get('/', (req, res) => {
    res.json({ message : "StageFinder API is running" })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
