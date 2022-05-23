import bodyParser from 'body-parser';
import express from 'express';
import { configurationMiddleware } from './middlewares';
import routes from './routes';

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(configurationMiddleware);

routes(app, router);

export default app;
