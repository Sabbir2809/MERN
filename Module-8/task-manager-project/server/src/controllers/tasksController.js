const tasksModel = require('../models/tasksModel');

// @description: User Registration
// @route: POST - /api/v1/registration
// @access: public
exports.createTask = async (req, res) => {
  try {
    const email = req.headers['email'];
    let reqBody = req.body;

    const taskBody = {
      email,
      ...reqBody,
    };

    const createTask = await tasksModel.create(taskBody);
    res.status(200).json({
      status: 'Success',
      data: createTask,
    });
  } catch (error) {
    res.status(200).json({ status: 'Fail', error: error.message });
  }
};

// @description: User Registration
// @route: POST - /api/v1/registration
// @access: public
exports.listTaskByStatus = async (req, res) => {
  try {
    const email = req.headers['email'];
    const status = req.params.status;

    const statusTask = await tasksModel.find({ email, status });
    res.status(200).json({
      status: 'Success',
      data: statusTask,
    });
  } catch (error) {
    res.status(200).json({ status: 'Fail', error: error.message });
  }
};

// @description: User Registration
// @route: POST - /api/v1/registration
// @access: public
exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const query = {
      _id: id,
    };
    await tasksModel.deleteOne(query);
    res.status(200).json({
      status: 'Success',
      data: `${id} Deleted`,
    });
  } catch (error) {
    res.status(200).json({ status: 'Fail', error: error.message });
  }
};

// @description: User Registration
// @route: POST - /api/v1/registration
// @access: public
exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const query = {
      _id: id,
    };
    const updateBody = req.body;

    const updatedTask = await tasksModel.updateOne(query, updateBody);
    res.status(200).json({
      status: 'Success',
      data: updatedTask,
    });
  } catch (error) {
    res.status(200).json({ status: 'Fail', error: error.message });
  }
};
