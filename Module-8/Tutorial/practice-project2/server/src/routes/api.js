// Dependencies
const router = require('express').Router();
const { createProfile, userLogin, userProfile, updateProfile } = require('../controllers/profileController');
const {
  createTodo,
  userTodo,
  updateTodo,
  deleteTodo,
  updateStatusTodo,
  selectTodoByStatus,
  selectTodoByDate,
} = require('../controllers/toDoListController');
const { authVerify } = require('../middleware/authVerifyMiddleware');

router.post('/create-profile', createProfile);
router.post('/user-login', userLogin);

router.get('/user-profile', authVerify, userProfile);
router.put('/update-profile', authVerify, updateProfile);

router.post('/create-todo', authVerify, createTodo);
router.get('/user-todo', authVerify, userTodo);
router.put('/update-todo/:id', authVerify, updateTodo);
router.delete('/delete-todo/:id', authVerify, deleteTodo);
router.put('/update-status-todo/:id', authVerify, updateStatusTodo);
router.get('/select-todo-by-status', authVerify, selectTodoByStatus);
router.get('/select-todo-by-date', authVerify, selectTodoByDate);

// exports
module.exports = router;
