import express, { Request, Response } from 'express';

const router: express.Router = express.Router();
const { getAll } = require('../controllers/combinedController');

router.get('/getAll', getAll);

module.exports = router;