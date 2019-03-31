import { mapObjIndexed } from 'ramda';

import * as services from './services';

const initialize = data => {
  return mapObjIndexed(service => service.initialize(data), services);
};

export default { initialize };
