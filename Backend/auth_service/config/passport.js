const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ email: profile._json.email });
    if (!user) {
      user = new User({
        name: profile._json.name,
        email: profile._json.email,
        password: '', 
      });
      await user.save();
    }
    done(null, user);
  } catch (err) {
    done(err, null);
  }
}));

passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: "/api/auth/linkedin/callback",
  scope: ['r_liteprofile', 'r_emailaddress']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ email: profile._json.emailAddress });
    if (!user) {
      user = new User({
        name: profile._json.firstName.localized.en_US + ' ' + profile._json.lastName.localized.en_US,
        email: profile._json.emailAddress,
        password: '', 
      });
      await user.save();
    }
    done(null, user);
  } catch (err) {
    done(err, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
