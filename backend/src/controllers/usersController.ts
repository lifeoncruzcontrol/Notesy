import { Request, Response } from 'express';
import { db } from '../config/database';

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: any[] = await db.any('SELECT * FROM users');
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  getAllUsers
};