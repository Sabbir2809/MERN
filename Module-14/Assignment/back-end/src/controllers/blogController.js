const mongoose = require('mongoose');
const blogModel = require('../models/blogModel');
const userModel = require('../models/userModel');

// Get All Blogs
exports.getAllBlogsController = async (req, res) => {
  try {
    const blogs = await blogModel.find({});
    // Validation
    if (!blogs) {
      return res.status(400).send({ success: false, message: 'No Blogs Found' });
    }

    // Successfully Response
    res.status(200).send({
      success: true,
      blogCount: blogs.length,
      data: blogs,
    });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

// Get a Single Blog
exports.getBlogByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);

    // Validation
    if (!blog) {
      return res.status(400).send({ success: false, message: 'Blog Not Found with this Id' });
    }

    // Successfully Response
    res.status(200).send({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

// Create Blogs
exports.createBlogController = async (req, res) => {
  try {
    const { title, description, image, user } = req.body;
    // Validation
    if (!title || !description || !image || !user) {
      return res.status(400).send({ success: false, message: 'Please Provide All Fields' });
    }

    const existingUser = await userModel.findById(user);
    if (!existingUser) {
      return res.status(400).send({ success: false, message: 'Unable to find user' });
    }

    // create blog
    const newBlog = await blogModel.create({ title, description, image, user });

    // session
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    existingUser.blogs.push(newBlog);
    await existingUser.save({ session });
    await session.commitTransaction();

    // Successfully Response
    res.status(200).send({
      success: true,
      data: newBlog,
    });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

// Update Blog
exports.updateBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;

    // Update Blog Information
    const updateBlog = await blogModel.findByIdAndUpdate(id, { ...req.body }, { new: true });

    // Successfully Response
    res.status(200).send({
      success: true,
      data: updateBlog,
    });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

// Delete Blog
exports.deleteBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findByIdAndDelete(id).populate('user');
    await blog.user.blogs.pull(blog);
    await blog.user.save();

    // Successfully Response
    res.status(200).send({
      success: true,
      message: 'Blog Deleted Successfully',
    });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

// Get a User Blog
exports.userBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const userBlog = await userModel.findById(id).populate('blogs');

    // Validation
    if (!userBlog) {
      return res.status(400).send({ success: false, message: 'Blog Not Found with this Id' });
    }

    // Successfully Response
    res.status(200).send({
      success: true,
      data: userBlog,
    });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};
