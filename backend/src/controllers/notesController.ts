import express, { Request, Response } from 'express';
import { db } from "../config/database";

const getAllNotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const notes: any[] = await db.any('SELECT * FROM notes');
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

const saveNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const saveNote = await db.none(`INSERT INTO notes (userid, notetext, notedate) VALUES (1, '${req.body.noteContent}', '${req.body.date}')`);
    res.status(200).send('Save completed');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

const deleteNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleteNote = await db.result(`DELETE FROM notes WHERE noteid='${req.body.noteId}'`);
    res.status(200).send(`Rows deleted: ${deleteNote.rowCount}`);
  } catch(err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllNotes,
  saveNote,
  deleteNote
}