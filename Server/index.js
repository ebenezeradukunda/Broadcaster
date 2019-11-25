/* eslint-disable no-undef */
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import 'dotenv/config';
import userRoute from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/api/v1', userRoute);

const port = process.env.PORT;
app.listen(port, () => console.log(`Now you are connected on this port ${port}...`));

export default app;