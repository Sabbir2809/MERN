const { mongoose } = require("mongoose");
const workoutModel = require("../models/workoutModel");

// Get All Workouts
exports.getAllWorkout = async (req, res) => {
  try {
    // find workout and sort
    const workouts = await workoutModel.find({}).sort({ createdAt: -1 });

    // success response
    res.status(200).json({
      status: true,
      data: workouts,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// Get a Single Workouts
exports.getSingleWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    // Mongoose ObjectId Validation
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ status: false, error: "Invalid Mongoose ObjectId" });
    }
    // find workout
    const workout = await workoutModel.findById(id);
    // validation
    if (!workout) {
      return res.status(404).json({ status: false, error: "Workout Not Found" });
    }
    // success response
    res.status(200).json({
      status: true,
      data: workout,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// Create a New Workouts
exports.createWorkout = async (req, res) => {
  try {
    const { title, load, reps } = req.body;

    // validation
    if (!title || !load || !reps) {
      return res.status(400).json({ status: false, error: "All Field are Required" });
    }
    // create document
    const workout = await workoutModel.create({ title, load, reps });
    // success response
    res.status(201).json({
      status: true,
      data: workout,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// Update a Workouts
exports.updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    // Mongoose ObjectId Validation
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ status: false, error: "Invalid Mongoose ObjectId" });
    }
    // update workout
    const updatedWorkout = await workoutModel.findOneAndUpdate({ _id: id }, { ...req.body });
    // validation
    if (!updatedWorkout) {
      return res.status(404).json({ status: false, error: "Workout Not Found" });
    }
    // success response
    res.status(200).json({
      status: true,
      data: updatedWorkout,
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// Delete a Workouts
exports.deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    // Mongoose ObjectId Validation
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ status: false, error: "Invalid Mongoose ObjectId" });
    }
    // find workout id and delete
    const workout = await workoutModel.findByIdAndDelete({ _id: id });
    // validation
    if (!workout) {
      return res.status(404).json({ status: false, error: "Workout Not Found" });
    }
    // success response
    res.status(200).json({
      status: true,
      message: "Workout Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};
