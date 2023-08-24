// Dependencies
const express = require("express");
const router = express.Router();
const {
  getAllWorkout,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutsController");

// API Routes End Point:
router.get("/workouts", getAllWorkout);
router.get("/workouts/:id", getSingleWorkout);
router.post("/workouts", createWorkout);
router.patch("/workouts/:id", updateWorkout);
router.delete("/workouts/:id", deleteWorkout);

// Exports
module.exports = router;
