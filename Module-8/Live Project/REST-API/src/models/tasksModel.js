const { Schema, model } = require('mongoose');

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

const tasksModel = model('tasks', tasksSchema);

module.exports = tasksModel;
