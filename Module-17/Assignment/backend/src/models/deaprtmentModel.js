const mongoose = require("mongoose");

// Schema
const departmentSchema = new mongoose.Schema(
  {
    department: { type: String, required: true },
    salaryExpense: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const DepartmentModel = mongoose.model("Departments", departmentSchema);
module.exports = DepartmentModel;
