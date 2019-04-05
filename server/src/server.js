import infrastructureLayer from './infrastructure';
import applicationLayer from './application';
import coreLayer from './core';
import validator from './core/validators/validator';
import serverConfig from './config';
import { logger } from './utilities/logging';

module.exports = (async () => {
  try {
    const data = await infrastructureLayer.initialize(serverConfig);

    const services = coreLayer.initialize({ data, validator });

    const app = applicationLayer.initialize({ services, logger });

    const port = process.env.PORT || 3001;

    return app.listen(port, () =>
      console.log(`Server listening on port: ${port}`)
    );
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
})();
