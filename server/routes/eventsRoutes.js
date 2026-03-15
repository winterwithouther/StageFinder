import express from "express"
import eventsController from "../controllers/eventsController.js"

const router = express.Router()

// GET /events
router.get("/", eventsController.getAllEvents)

// GET /events/:location
router.get("/:location", eventsController.getEventsByLocation)

export default router