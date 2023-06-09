// @Dependencies
const router = require('express').Router();
const { encodedToken, decodedToken } = require('../controllers/JWT');
const { authIssue } = require('../controllers/authIssueController');
const {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentsController');
const { authVerify } = require('../middleware/authVerifyMiddleware');

// CRUD with JWT Auth
router.get('/auth/user', authIssue);
router.post('/create/student', authVerify, createStudent);
router.get('/read/students', authVerify, getStudents);
router.put('/update/student/:id', authVerify, updateStudent);
router.delete('/delete/student/:id', authVerify, deleteStudent);

// Practice with JWT Encoded and Decoded
router.get('/auth/encodedToken', encodedToken);
router.get('/auth/decodedToken', decodedToken);

module.exports = router;
