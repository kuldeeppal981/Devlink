import express from 'express';
import dotenv from 'dotenv';
import groupRoutes from './routes/groupRoutes';

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/api/groups', groupRoutes);



export default app;
