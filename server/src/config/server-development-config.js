import mongooseContext from '../infrastructure/mongoose/context';
import * as mongooseRepositories from '../infrastructure/mongoose/repositories';

const mongodbConnectionString = 'mongodb://localhost:27017/usersdb';
const DEFAULT_ORM = 'mongoose';
const currentORM = process.env.ORM || DEFAULT_ORM;

const config = {
  mongoose: {
    context: mongooseContext,
    repositories: mongooseRepositories,
    connectionString: mongodbConnectionString
  }
};

export default {
  databaseConfig: config[currentORM]
};
