import redis from 'redis';
import { REDIS_URI } from './index';

export const redisClient = redis.createClient(REDIS_URI);
redisClient.on('error', (err) => console.error('Redis error:', err));
