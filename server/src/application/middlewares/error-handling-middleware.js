import { ERROR_STATUS_CODE_MAPPINGS } from '../constants';
import { ValidationError } from '../../utilities/errors';

// eslint-disable-next-line no-unused-vars
const errorHandlingMiddleware = ({ logger }) => (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res
      .status(ERROR_STATUS_CODE_MAPPINGS[err.errorType])
      .json({ message: err.message });

    logger.info(err);
  } else {
    res.status(500).send({ message: 'Something went wrong!' });

    logger.error(err);
  }
};

export default errorHandlingMiddleware;
