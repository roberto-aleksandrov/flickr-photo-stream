import { ERROR_STATUS_CODE_MAPPINGS } from '../constants';
import { ValidationError } from '../../utilities/errors';

// eslint-disable-next-line no-unused-vars
const errorHandlingMiddleware = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res
      .status(ERROR_STATUS_CODE_MAPPINGS[err.errorType])
      .json({ message: err.message });
  } else {
    res.status(500).send({ message: 'Something went wrong!' });
  }
};

export default errorHandlingMiddleware;
