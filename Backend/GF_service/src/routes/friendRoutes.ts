// src/routes/friendRoutes.ts
import { Router } from 'express';
import {
    getFriends,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
    removeFriend
} from '../controllers/friendsController';

const router = Router();
router.get('/getFriends', getFriends);
router.post('/request', sendFriendRequest);


router.post('/accept', acceptFriendRequest);

router.post('/decline', declineFriendRequest);
router.delete('/:friendId', removeFriend);

export default router;
