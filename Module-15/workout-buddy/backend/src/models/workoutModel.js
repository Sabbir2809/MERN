const mongoose = require("mongoose");

// Schema
const workoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

// model
const workoutModel = mongoose.model("Workouts", workoutSchema);

module.exports = workoutModel;
