// Dependencies
const TodoListModel = require('../models/toDoListModel');

// @description: Create Todo
// @route: POST - /api/v1/create-profile
// @access: public
exports.createTodo = async (req, res) => {
  const userName = req.headers['userName'];
  const { todoSubject, todoDescription } = req.body;
  let todoStatus = 'New';
  const todoCreateDate = Date.now();
  let todoUpdateDate = Date.now();

  const postBody = {
    userName,
    todoSubject,
    todoDescription,
    todoStatus,
    todoCreateDate,
    todoUpdateDate,
  };

  try {
    const todo = await TodoListModel.create(postBody);
    res.status(201).json({
      status: 'Success',
      data: todo,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.toString() });
  }
};

// @description: User Todo
// @route: POST - /api/v1/user-todo
// @access: private
exports.userTodo = async (req, res) => {
  let userName = req.headers['userName'];
  try {
    const todo = await TodoListModel.find({ userName });
    res.status(200).json({
      status: 'Success',
      data: todo,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.toString() });
  }
};

// @description: Todo Update
// @route: POST - /api/v1/update-todo
// @access: private
exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  const { todoSubject, todoDescription } = req.body;
  const todoUpdateDate = Date.now();

  const postBody = {
    todoSubject,
    todoDescription,
    todoUpdateDate,
  };
  try {
    await TodoListModel.updateOne({ _id: id }, { $set: postBody }, { upsert: true });
    res.status(200).json({
      status: 'Success',
      data: postBody,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.toString() });
  }
};

// @description: Todo Delete
// @route: DELETE - /api/v1/delete-todo
// @access: private
exports.deleteTodo = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteTodo = await TodoListModel.deleteOne({ _id: id });
    res.status(200).json({
      status: 'Success',
      data: deleteTodo,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.toString() });
  }
};

// @description: Update Status Todo
// @route: DELETE - /api/v1/update-status-todo
// @access: private
exports.updateStatusTodo = async (req, res) => {
  const id = req.params.id;

  try {
    const statusUpdate = await TodoListModel.updateOne({ _id: id }, { $set: req.body }, { upsert: true });
    res.status(200).json({
      status: 'Success',
      data: statusUpdate,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.toString() });
  }
};

// @description: Select Todo By Status
// @route: POST - /api/v1/select-todo-by-status
// @access: private
exports.selectTodoByStatus = async (req, res) => {
  const userName = req.headers['userName'];
  const { todoStatus } = req.body;

  try {
    const todo = await TodoListModel.find({ userName, todoStatus });
    res.status(200).json({
      status: 'Success',
      data: todo,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.toString() });
  }
};

// @description: Select Todo By Date
// @route: POST - /api/v1/select-todo-by-date
// @access: private
exports.selectTodoByDate = async (req, res) => {
  const userName = req.headers['userName'];
  const { formDate, toDate } = req.body;

  try {
    const todo = await TodoListModel.find({
      userName,
      todoCreateDate: { $gte: new Date(formDate), $lte: new Date(toDate) },
    });
    res.status(200).json({
      status: 'Success',
      data: todo,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.toString() });
  }
};
