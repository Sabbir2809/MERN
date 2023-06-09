const { Schema, model } = require('mongoose');

// Schema
const tasksSchema = Schema(
  {
    email: {
      type: String,
    },
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

// model
const tasksModel = model('tasks', tasksSchema);

// exports
module.exports = tasksModel;
