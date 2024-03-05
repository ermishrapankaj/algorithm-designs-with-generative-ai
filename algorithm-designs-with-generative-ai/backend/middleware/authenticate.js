const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || '8*zBcD!1fGhJ2#kLmN3^pQrStU4&vWx'; // Use the same secret as before.

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;
    if (!token) {
      throw new Error('Unauthorized: No token provided.');
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      throw new Error('Unauthorized: User not found.');
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = authenticate;
