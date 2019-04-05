import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';
import { forEachObjIndexed } from 'ramda';

import * as controllers from './controllers';
import { errorHandlingMiddleware } from './middlewares';

const initialize = ({ services, logger }) => {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  forEachObjIndexed(
    controller => controller.initialize(app)(services),
    controllers
  );

  app.use(errorHandlingMiddleware({ logger }));

  return app;
};

export default { initialize };
