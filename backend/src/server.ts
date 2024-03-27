import express from 'express';
import { testConection } from './config/database';

const path = require('path');
const app = express();
const port = 3000;

const usersRoute = require('./routes/usersRoutes');
const notesRoute = require('./routes/notesRoutes');
const combinedRoute = require('./routes/combinedRoutes');

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../frontend/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

app.use('/users', usersRoute);
app.use('/notes', notesRoute);
app.use('/combined', combinedRoute);

app.listen(port, async () => {
  console.log(`Server is running on localhost port ${port}`);
  console.log(await testConection());
});