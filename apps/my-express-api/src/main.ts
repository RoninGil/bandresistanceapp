/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

const app = express();

const BASE_URL = '/api/bandResistance';

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get(`${BASE_URL}/getSomething`, (req, res) => {
  res.send({ resistanceValue: 10, toleranceValue: 100 });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
