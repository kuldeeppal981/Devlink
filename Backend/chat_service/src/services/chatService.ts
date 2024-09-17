import Message from '../models/messageModel';

export const saveMessage = async (userId: string, content: string) => {
  const message = new Message({ userId, content });
  await message.save();
  return message;
};

export const getMessages = async () => {
  return await Message.find().sort({ timestamp: 1 }).exec();
};
