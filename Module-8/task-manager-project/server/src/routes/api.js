// Dependencies
const router = require('express').Router();
const { createTask, updateTask, deleteTask, listTaskByStatus } = require('../controllers/tasksController');
const { registration, login, profileDetails, verifyOTP, sendOTP } = require('../controllers/usersController');
const { authVerify } = require('../middleware/authVerifyMiddleware');

// Before Login
router.post('/registration', registration);
router.post('/login', login);
router.get('/send-otp/:email', sendOTP);
router.get('/verify-otp/:email/:otp', verifyOTP);

// After Login
router.get('/profile-details', authVerify, profileDetails);

// Task
router.post('/create-task', authVerify, createTask);
router.get('/list-task-by-status/:status', authVerify, listTaskByStatus);
router.put('/update-task/:id', authVerify, updateTask);
router.delete('/delete-task/:id', authVerify, deleteTask);

// export
module.exports = router;
