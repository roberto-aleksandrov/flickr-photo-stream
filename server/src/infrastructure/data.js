const data = {
  initialize: async ({ databaseConfig }) => {
    const { context, repositories, connectionString } = databaseConfig;

    await context.connect({ connectionString });

    return repositories;
  }
};

export default data;
