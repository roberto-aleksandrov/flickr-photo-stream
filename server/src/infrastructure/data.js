import context from './context';
import * as repositories from './repositories';

const data = {
  initialize: async ({ connectionString }) => {
    await context.connect({ connectionString });

    return repositories;
  }
};

export default data;
