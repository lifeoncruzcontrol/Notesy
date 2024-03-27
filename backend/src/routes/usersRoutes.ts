import express from 'express';

const router: express.Router = express.Router();
const { getAllUsers } = require('../controllers/usersController');

router.get('/getAll', getAllUsers);

module.exports = router;