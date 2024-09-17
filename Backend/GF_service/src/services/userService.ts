// src/services/userService.ts
import UserModel from '../models/userModel';

class UserService {
  // Get user by ID
  public async getUserById(userId: string) {
    return await UserModel.findById(userId);
  }

  // Search for users by username or email
  public async searchUsers(searchQuery: string) {
    return await UserModel.find({
      username: { $regex: searchQuery, $options: 'i' },
    });
  }
}

export default new UserService();
