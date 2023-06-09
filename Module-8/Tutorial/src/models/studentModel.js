const { Schema, model } = require('mongoose');

const studentSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: [14, 'Min Age 15 and Max 40, But Supplied Value is = {VALUE}'],
      max: [40, 'Min Age 15 and Max 40, But Supplied Value is = {VALUE}'],
    },
    mobileNumber: {
      type: String,
      validate: {
        validator: (value) => {
          // if (value.length === 11) {
          //   return true;
          // } else {
          //   return false;
          // }
          return /(^(\+88|0088)?(01){01}[3456789]{1}(\d){8})$/.test(value);
        },
        // message: '11 Digit Mobile Number Required',
        message: 'Invalid Bangladeshi Mobile Number',
      },
    },
    studentId: {
      type: String,
      unique: true,
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
