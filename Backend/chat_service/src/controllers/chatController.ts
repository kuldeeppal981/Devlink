import { Server as SocketIOServer, Socket } from 'socket.io';
import { saveMessage, getMessages } from '../services/chatService';
import { redisClient } from '../config/redisConfig';
import { getUserPresence, updateUserPresence } from '../services/userService';

export const setupSocketHandlers = (io: SocketIOServer) => {
  io.on('connection', (socket: Socket) => {
    console.log('New user connected:', socket.id);

    // Handle user presence
    socket.on('join', async (userId: string) => {
      await updateUserPresence(userId, true);
      io.emit('userPresenceUpdate', await getUserPresence());
    });

    socket.on('disconnect', async () => {
      console.log('User disconnected:', socket.id);
      await updateUserPresence(socket.id, false);
      io.emit('userPresenceUpdate', await getUserPresence());
    });

    // Handle message sending
    socket.on('sendMessage', async (messageData: { userId: string; content: string; roomId?: string }) => {
      const { userId, content, roomId } = messageData;
      const message = await saveMessage(userId, content, roomId);

      if (roomId) {
        io.to(roomId).emit('receiveMessage', message);
      } else {
        io.emit('receiveMessage', message);
      }
    });

    // Handle retrieving messages
    socket.on('getMessages', async () => {
      const messages = await getMessages();
      socket.emit('allMessages', messages);
    });

    // Handle typing indicators
    socket.on('typing', (roomId: string) => {
      socket.broadcast.to(roomId).emit('typing', socket.id);
    });

    // Handle message read receipt
    socket.on('readReceipt', (messageId: string) => {
      io.emit('readReceipt', messageId);
    });

    // Handle joining and leaving rooms for group chat
    socket.on('joinRoom', (roomId: string) => {
      socket.join(roomId);
    });

    socket.on('leaveRoom', (roomId: string) => {
      socket.leave(roomId);
    });
  });
};
