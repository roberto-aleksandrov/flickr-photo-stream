import infrastructureLayer from './infrastructure';
import applicationLayer from './application';
import coreLayer from './core';
import validator from './core/validators/validator';
import serverConfig from './config';

(async () => {
  const data = await infrastructureLayer.initialize(serverConfig);

  const services = coreLayer.initialize(data, validator);

  const app = applicationLayer.initialize(services);

  app.listen(3001);
})();
