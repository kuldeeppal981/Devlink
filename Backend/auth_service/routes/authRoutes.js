const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');



router.post('/register', authController.register);


router.post('/login', authController.login);


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  
  if (req.user) {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Authentication failed' });
  }
});

router.get('/linkedin', passport.authenticate('linkedin'));

router.get('/linkedin/callback', passport.authenticate('linkedin', { session: false }), (req, res) => {
 
  if (req.user) {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Authentication failed' });
  }
});

module.exports = router;
