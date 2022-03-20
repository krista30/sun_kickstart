import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import * as path from 'path';
import routes from './routes/base-routes';
import logger from './middlewares/logger.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import * as MySQLConnector from './utils/mysql.connector';

const app = express();
const PORT = process.env.PORT;

// create database pool
MySQLConnector.init();

// serve static files
app.use(express.static(path.join(__dirname, '../public')));

// compresses all the responses
app.use(compression());

// adding set of security middlewares
app.use(helmet());

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// enable all CORS request
app.use(cors());

// add logger middleware
app.use(logger);

app.use('/api/', routes);

// add custom error handler middleware as the last middleware
app.use(errorHandler);

app.listen(PORT, () => {
   console.log(`LISTENING ON PORT: ${PORT}`);
});


