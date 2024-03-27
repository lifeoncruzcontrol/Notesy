import { Request, Response } from 'express';
import { db } from '../config/database';

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const combined: any[] = await db.any(`SELECT * FROM users JOIN notes USING (userId)`);
    res.json(combined);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAll
};