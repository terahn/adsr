import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';

import db from './db';
import soundRouter from './routes/sound-router';
import userRouter from './routes/user-router';

const app = express();
const apiPort = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: '50000',
  })
);
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', soundRouter);
app.use('/api', userRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
