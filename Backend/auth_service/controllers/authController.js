const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.register = async (req, res) => {
  const { name, email, password, designation, technology } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.error(409, 'User already exists', 'USER_EXISTS', 'A user with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, designation, technology });
    await newUser.save();

    res.created('User registered successfully', { id: newUser._id, name: newUser.name, email: newUser.email });
  } catch (err) {
    res.error(500, 'Registration failed', 'SERVER_ERROR', err.message);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.error(400, 'Invalid credentials', 'INVALID_CREDENTIALS', 'Email or password is incorrect');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.error(400, 'Invalid credentials', 'INVALID_CREDENTIALS', 'Email or password is incorrect');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.success('Login successful', { token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.error(500, 'Login failed', 'SERVER_ERROR', err.message);
  }
};

exports.googleLogin = async (req, res) => {
  const { idToken } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    let user = await User.findOne({ email: payload.email });
    if (!user) {
      user = new User({
        name: payload.name,
        email: payload.email,
        password: '', 
        designation: '',
        technology: []
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.logout = (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
};
