import express from 'express';

const router: express.Router = express.Router();

const { getKeys } = require('../controllers/firebaseController');

router.get('/getKeys', getKeys);

module.exports = router;