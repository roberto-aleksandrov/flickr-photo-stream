import infrastructureLayer from './infrastructure';
import applicationLayer from './application';
import coreLayer from './core';

(async () => {
  const data = await infrastructureLayer.initialize({
    connectionString: process.env.CONNECTION_STRING
  });

  const services = coreLayer.initialize(data);

  const app = applicationLayer.initialize(services);

  app.listen(3001);
})();

// app.listen(3001, () => console.log('listening on port 3001!'));
