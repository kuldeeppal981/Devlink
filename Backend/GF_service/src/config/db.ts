const mongoose = require('mongoose');
const username = encodeURIComponent('');
const password = encodeURIComponent('');
const cluster = 'devlink.1boiy.mongodb.net';
const database = 'auth-service';

const mongoURI = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority&appName=devlink`;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err:any) {
    console.error(err.message);
    process.exit(1);
  }
};


