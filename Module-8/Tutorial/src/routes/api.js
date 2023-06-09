const {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentsController');

// @Dependencies
const router = require('express').Router();

router.post('/student', createStudent);
router.get('/students', getStudents);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);

module.exports = router;
