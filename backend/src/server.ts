import express from 'express';
import path from 'path';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/assets/uploads', express.static(path.join(__dirname, '..', 'assets', 'uploads')));
app.use(errorHandler);

app.listen(3333);