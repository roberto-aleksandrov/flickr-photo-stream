import { ERROR_TYPES } from '../../utilities/error-types';

const ERROR_STATUS_CODE_MAPPINGS = {
  [ERROR_TYPES.INVALID_DATA]: 400,
  [ERROR_TYPES.EXISTS]: 409
};

export default ERROR_STATUS_CODE_MAPPINGS;
