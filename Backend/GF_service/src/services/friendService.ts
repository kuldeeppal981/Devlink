// src/services/friendService.ts
import FriendModel from '../models/friends';
import FriendRequestModel from '../models/friendRequestModel';
import UserModel from '../models/userModel';

class FriendService {
  public async getFriends(userId: string) {
    return await FriendModel.find({ userId }).populate('friendId', 'username email');
  }

  public async sendFriendRequest(senderId: string, receiverId: string) {
    const existingRequest = await FriendRequestModel.findOne({ senderId, receiverId });
    if (existingRequest) {
      throw new Error('Friend request already sent.');
    }

    return await FriendRequestModel.create({
      senderId,
      receiverId,
      status: 'pending',
    });
  }

  public async acceptFriendRequest(requestId: string) {
    const friendRequest = await FriendRequestModel.findById(requestId);
    if (!friendRequest) {
      throw new Error('Friend request not found.');
    }

    if (friendRequest.status !== 'pending') {
      throw new Error('Friend request is not in a pending state.');
    }

    friendRequest.status = 'accepted';
    await friendRequest.save();
    await FriendModel.create({ userId: friendRequest.senderId, friendId: friendRequest.receiverId });
    await FriendModel.create({ userId: friendRequest.receiverId, friendId: friendRequest.senderId });

    return friendRequest;
  }

  public async declineFriendRequest(requestId: string) {
    const friendRequest = await FriendRequestModel.findById(requestId);
    if (!friendRequest) {
      throw new Error('Friend request not found.');
    }
    friendRequest.status = 'declined';
    await friendRequest.save();

    return friendRequest;
  }
  public async removeFriend(userId: string, friendId: string) {
    await FriendModel.findOneAndDelete({ userId, friendId });
    await FriendModel.findOneAndDelete({ userId: friendId, friendId: userId });
    return { message: 'Friend removed successfully' };
  }

  
  public async searchUsers(userId: string, searchQuery: string) {
    const friends = await FriendModel.find({ userId }).select('friendId');
    const friendIds = friends.map(friend => friend.friendId);

    const users = await UserModel.find({
      username: { $regex: searchQuery, $options: 'i' },
      _id: { $nin: [userId, ...friendIds] },
    });

    return users;
  }
}

export default new FriendService();
