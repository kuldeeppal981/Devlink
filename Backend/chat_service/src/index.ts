import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { connectMongoDB } from './config/dbConfig';
import { redisClient } from './config/redisConfig';
import { connectRabbitMQ } from './config/rabbitmqConfig';
import { setupSocketHandlers } from './controllers/chatController';
import router from './routes/chatRoutes';
import { PORT } from './config/index';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

connectMongoDB();
connectRabbitMQ();

app.use(express.json());
app.use('/api', router);

setupSocketHandlers(io);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
