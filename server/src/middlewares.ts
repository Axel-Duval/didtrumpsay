import bodyParser from "body-parser";
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { Express, static as sStatic } from 'express';
import path from 'path';

export function setupMiddlewares(app: Express) {
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended:  false}));
    app.use(bodyParser.json());
    app.use('/', sStatic(path.resolve(__dirname, '..', 'dist', 'public')));
}