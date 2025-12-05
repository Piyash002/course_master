import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';
import cookieParser from 'cookie-parser';
import { router } from './routes';

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);
app.use('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(errorHandler);

export default app;
