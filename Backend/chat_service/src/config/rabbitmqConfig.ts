import amqplib from 'amqplib';
import { RABBITMQ_URI } from './index';

export const connectRabbitMQ = async () => {
  try {
    const connection = await amqplib.connect(RABBITMQ_URI);
    const channel = await connection.createChannel();
    console.log('RabbitMQ connected');
   
  } catch (error) {
    console.error('RabbitMQ connection error:', error);
  }
};
