const data = {
  initialize: ({ databaseConfig }) => {
    const { context, repositories, connectionString } = databaseConfig;

    context.connect({ connectionString });

    return repositories;
  }
};

export default data;
