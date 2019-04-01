import context from './mongoose/context';
import * as repositories from './mongoose/repositories';

const data = {
  initialize: async ({ connectionString }) => {
    await context.connect({ connectionString });

    return repositories;
  }
};

export default data;
