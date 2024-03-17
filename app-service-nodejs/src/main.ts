import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import { config } from './config.js';

console.log(`Running using port ${config.port}`);

const app = express();

app.use(morgan('combined'));

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// api routes
app.use('/api', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(config.port, () => {
  console.log(`Listening to port ${config.port}`);
});
