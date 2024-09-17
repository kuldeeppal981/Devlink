import redis from 'redis';
import { redisClient } from '../config/redisConfig';

export const updateUserPresence = async (userId: string, isOnline: boolean) => {
  await redisClient.set(`user:${userId}:presence`, isOnline ? 'online' : 'offline');
};

export const getUserPresence = async () => {
  const keys = await redisClient.keys('user:*:presence');
  const presence = await Promise.all(keys.map(async (key) => {
    const userId = key.split(':')[1];
    const status = await redisClient.get(key);
    return { userId, status };
  }));
  return presence;
};
