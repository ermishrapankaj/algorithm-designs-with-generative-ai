const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // INPUT_REQUIRED: Set your JWT secret environment variable or leave the default for development.

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send('User registered successfully!');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid login credentials.');
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.cookie('auth_token', token);
    res.send('User logged in successfully!');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
