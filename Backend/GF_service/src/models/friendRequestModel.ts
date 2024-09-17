// src/models/friendRequestModel.ts
import { Schema, model, Document } from 'mongoose';

interface IFriendRequest extends Document {
  senderId: string;
  receiverId: string;
  status: 'pending' | 'accepted' | 'declined';
}

const friendRequestSchema = new Schema<IFriendRequest>({
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
}, { timestamps: true });

export default model<IFriendRequest>('FriendRequest', friendRequestSchema);
