import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  userId: string;
  content: string;
  timestamp: Date;
}

const messageSchema: Schema = new Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model<IMessage>('Message', messageSchema);
export default Message;
