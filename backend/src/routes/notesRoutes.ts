import express from 'express';

const router: express.Router = express.Router();
const { getAllNotes, saveNote, deleteNote } = require('../controllers/notesController');

router.get('/getAll', getAllNotes);

router.post('/saveNote', saveNote);

router.delete('/deleteNote', deleteNote);

module.exports = router;