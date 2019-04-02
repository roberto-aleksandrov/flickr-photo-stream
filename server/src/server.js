import infrastructureLayer from './infrastructure';
import applicationLayer from './application';
import coreLayer from './core';
import validator from './core/validators/validator';
import serverConfig from './config';

const data = infrastructureLayer.initialize(serverConfig);

const services = coreLayer.initialize(data, validator);

const app = applicationLayer.initialize(services);

const port = process.env.PORT || 3001;

module.exports = app.listen(port, () =>
  console.log(`Server listening on port: ${port}`)
);
