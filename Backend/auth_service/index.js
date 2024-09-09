const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const redisClient = require('./config/redis');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorMiddleware');
const rateLimiter = require('./middleware/rateLimitMiddleware');


dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: 'http://localhost:4200', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  }));
app.use(express.json());


app.use('/api/auth', rateLimiter);

app.use('/api/auth', authRoutes);
app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
