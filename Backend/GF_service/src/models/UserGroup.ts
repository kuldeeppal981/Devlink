import mongoose from 'mongoose';

const UserGroupSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
  role: { type: String, enum: ['admin', 'member'], default: 'member' }
}, { timestamps: true });

const UserGroup = mongoose.model('UserGroup', UserGroupSchema);
export default UserGroup;
