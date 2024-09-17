import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

export const PORT = process.env.PORT || 3000;
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/chat';
export const REDIS_URI = process.env.REDIS_URI || 'redis://localhost:6379';
export const RABBITMQ_URI = process.env.RABBITMQ_URI || 'amqp://localhost';
