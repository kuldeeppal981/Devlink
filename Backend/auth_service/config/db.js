const mongoose = require('mongoose');
const username = encodeURIComponent('kuldeep45');
const password = encodeURIComponent('Smart@12');
const cluster = 'cluster.gz9ht.mongodb.net';
const database = 'auth-service';

const mongoURI = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};


module.exports = connectDB;
