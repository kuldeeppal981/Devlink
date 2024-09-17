import mongoose, { Document } from 'mongoose';

interface IGroup extends Document {
  name: string;
  about: string;
  groupType: 'public' | 'private';
  bannerImage?: string;
  groupProfileImage?: string;
  admin: mongoose.Schema.Types.ObjectId;
  members: mongoose.Schema.Types.ObjectId[];
  posts: mongoose.Schema.Types.ObjectId[];
}

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  about: { type: String, required: true },
  groupType: { type: String, enum: ['public', 'private'], required: true },
  bannerImage: { type: String },
  groupProfileImage: { type: String },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const Group = mongoose.model<IGroup>('Group', groupSchema);
export default Group;
