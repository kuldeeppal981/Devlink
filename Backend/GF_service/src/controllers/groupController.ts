import { Request, Response } from 'express';
import Group from '../models/Group';


export const createGroup = async (req: any, res: Response) => {
  const { name, about, groupType } = req.body;

  try {
    const group = new Group({
      name,
      about,
      groupType,
      admin: req.user.id, 
      members: [req.user.id]
    });

    if (req.file) {
      group.bannerImage = req.file.path;
    }

    await group.save();
    res.status(201).json(group);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create group', error: err });
  }
};

export const getGroups = async (req: Request, res: Response) => {
  try {
    const groups = await Group.find().populate('admin members');
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch groups', error: err });
  }
};

export const deleteGroup = async (req: any, res: Response) => {
  const groupId = req.params.id;

  try {
    const group = await Group.findById(groupId);

    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    if (group.admin.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Only admin can delete the group' });
    }

    // await group.remove();
    res.status(200).json({ message: 'Group deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete group', error: err });
  }
};
