// src/models/friendModel.ts
import { Schema, model, Document } from 'mongoose';

interface IFriend extends Document {
  userId: string;
  friendId: string;
}

const friendSchema = new Schema<IFriend>({
  userId: { type: String, required: true },
  friendId: { type: String, required: true },
}, { timestamps: true });

export default model<IFriend>('Friend', friendSchema);
