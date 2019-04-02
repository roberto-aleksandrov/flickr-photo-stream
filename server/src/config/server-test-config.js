import { Mockgoose } from 'mock-mongoose';
import mongoose from 'mongoose';
import mongooseContext from '../infrastructure/mongoose/context';
import * as mongooseRepositories from '../infrastructure/mongoose/repositories';

const mongodbConnectionString = 'mongodb://localhost:27017/usersdb';
const DEFAULT_ORM = 'mongoose';

const currentORM = process.env.ORM || DEFAULT_ORM;

const mockedMongoose = {
  connect: async ({ connectionString }) => {
    await new Mockgoose(mongoose).prepareStorage();
    mongooseContext.connect({ connectionString });
  }
};

const config = {
  mongoose: {
    context: mockedMongoose,
    repositories: mongooseRepositories,
    connectionString: mongodbConnectionString
  }
};

export default {
  databaseConfig: config[currentORM]
};
