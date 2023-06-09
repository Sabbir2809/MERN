const { Schema, model } = require('mongoose');

const studentSchema = Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      trim: true,
      default: 'B.Sc in CSE',
    },
  },
  {
    versionKey: false,
  },
  {
    timestamps: true,
  }
);

const Student = model('students', studentSchema);

module.exports = Student;
