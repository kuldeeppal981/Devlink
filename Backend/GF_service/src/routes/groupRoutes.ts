import express from 'express';
import { createGroup, getGroups, deleteGroup } from '../controllers/groupController';
// import { upload } from '../middlewares/uploadMiddleware'; 

const router = express.Router();

// Create Group (with banner image upload)
// router.post('/', upload.single('bannerImage'), createGroup);

// Get all groups
router.get('/', getGroups);

// Delete Group
router.delete('/:id', deleteGroup);

export default router;
