// Dependencies
const { Schema, model } = require('mongoose');

// Schema
const TodoListSchema = Schema(
  {
    userName: {
      type: String,
    },
    todoSubject: {
      type: String,
      trim: true,
      required: true,
    },
    todoDescription: {
      type: String,
      trim: true,
    },
    todoStatus: {
      type: String,
    },
    todoCreateDate: {
      type: Date,
    },
    todoUpdateDate: {
      type: Date,
    },
  },

  { versionKey: false }
);

// model
const TodoListModel = model('List', TodoListSchema);

// exports
module.exports = TodoListModel;
