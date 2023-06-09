const Student = require('../models/studentModel');

// @description: Create New Student
// @route: POST - /api/student
// @access: public
exports.createStudent = async (req, res, next) => {
  const reqBody = req.body;
  try {
    const student = await Student.create(reqBody);
    res.status(201).json({
      status: 'Success',
      data: student,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', message: error.toString() });
  }
};

// @description: Get All Students
// @route: GET - /api/students
// @access: public
exports.getStudents = async (req, res) => {
  const query = {};
  const projection = 'name age studentId mobileNumber department';

  try {
    const students = await Student.find(query, projection);
    res.status(200).json({
      status: 'Success',
      data: students,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', message: error.toString() });
  }
};

// @description: Update Student
// @route: PUT - /api/student
// @access: public
exports.updateStudent = async (req, res) => {
  const id = req.params.id;
  const query = {
    _id: id,
  };
  const updateData = req.body;

  try {
    const student = await Student.updateOne(query, updateData);
    res.status(200).json({
      status: 'Success',
      data: student,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', message: error.toString() });
  }
};

// @description: Delete Student
// @route: DELETE - /api/student
// @access: public
exports.deleteStudent = async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };

  try {
    await Student.deleteOne(query);
    res.status(200).json({
      status: `Student ID: ${id}, Information Successfully Deleted.`,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', message: error.toString() });
  }
};
