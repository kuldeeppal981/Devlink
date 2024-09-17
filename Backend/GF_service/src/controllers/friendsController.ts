// src/controllers/friendController.ts
import { Request, Response } from 'express';
import friendService from '../services/friendService';

export const getFriends = async (req: Request |any, res: Response) => {
  try {
    const userId = req.user.id; 
    const friends = await friendService.getFriends(userId);
    res.status(200).json(friends);
  } catch (error :any) {
    res.status(500).json({ message: error.message });
  }
};

export const sendFriendRequest = async (req: Request |any, res: Response) => {
  try {
    const senderId = req.user.id;
    const { friendId } = req.body;
    const request = await friendService.sendFriendRequest(senderId, friendId);
    res.status(201).json(request);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const acceptFriendRequest = async (req: Request, res: Response) => {
  try {
    const { requestId } = req.body;
    const friendRequest = await friendService.acceptFriendRequest(requestId);
    res.status(200).json(friendRequest);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const declineFriendRequest = async (req: Request, res: Response) => {
  try {
    const { requestId } = req.body;
    const friendRequest = await friendService.declineFriendRequest(requestId);
    res.status(200).json(friendRequest);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const removeFriend = async (req: Request |any, res: Response) => {
  try {
    const userId = req.user.id;
    const { friendId } = req.params;
    const result = await friendService.removeFriend(userId, friendId);
    res.status(200).json(result);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};
