const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

// signup
exports.signup = async (req, res) => {
  try {
    // 1. Destructure name, email, password from req.body
    const { name, email, password } = req.body;

    // 2. All fields require Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All Fields are Mandatory!' });
    }
    if (!password || !password.length < 4) {
      return res.status(400).json({ message: 'Password should contain at least 4 characters' });
    }

    // 3. Check if email is already available
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User Already Register' });
    }

    // 4. Hash Password and Register User
    const hashedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // 5. Create JWT
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: '7d' });

    // 6. Send Response
    res.status(201).json({
      status: 'Success',
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.message });
  }
};

// login
exports.login = async (req, res) => {
  try {
    // 1. Destructure name, email, password from req.body
    const { name, email, password } = req.body;

    // 2. All fields require Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All Fields are Mandatory!' });
    }
    if (!password || !password.length < 4) {
      return res.status(400).json({ message: 'Password should contain at least 4 characters' });
    }

    // 3. Check if email is already available
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User Not Found' });
    }

    // 4. Compare Password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // 5. JWT
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: '7d' });

    // 6. Send Response
    res.status({
      status: 'Success',
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.message });
  }
};

// Update Profile
exports.updateProfile = async (req, res) => {
  try {
    // 1. Destructure name, email, password from req.body
    const { name, password, address } = req.body;
    // 2. User Info Find By Id
    const user = await userModel.findById(req.user._id);

    // 3. Check Password
    if (password || password.length < 4) {
      return res.status(400).json({ message: 'Password should contain at least 4 characters' });
    }

    // 4. Hash Password
    const hashedPassword = password ? await bcrypt.hash(password) : undefined;

    // 5. Updated User Information
    const updated = await userModel.findByIdAndUpdate(
      req.user_id,
      {
        name: name || user.name,
        password: hashedPassword || user.password,
        address: address || user.address,
      },
      { new: true }
    );

    updated.password = undefined;
    updated.role = undefined;

    res.status(200).json({ status: 'Success', data: updated });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.message });
  }
};

// Secret
exports.secret = async (req, res) => {
  res
    .status(200)
    .json({ status: 'Success', data: req.user, message: 'Admin Successfully Entered in the Controller' });
};
