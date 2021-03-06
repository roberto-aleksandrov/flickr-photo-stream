import validate from 'validate.js';
import { ValidationError } from '../../utilities/errors';
import { ERROR_TYPES } from '../../utilities/error-types';

export const exist = predicate => async ({ repository }) => {
  const entityExists = await repository.exist(predicate);

  if (!entityExists) {
    throw new ValidationError(
      `${repository.modelName} does not exist!`,
      ERROR_TYPES.INVALID_DATA
    );
  }
};

export const modelIsValid = ({ schema, entity }) => async () => {
  const err = validate(entity, schema);

  if (err) {
    throw new ValidationError(err, ERROR_TYPES.INVALID_DATA);
  }
};

export const hasValidId = id => ({ repository }) => {
  const objectIdIsValid = repository.idIsValid(id);

  if (!objectIdIsValid) {
    throw new ValidationError('Invalid Id!', ERROR_TYPES.INVALID_DATA);
  }
};

export const isNonExistent = predicate => async ({ repository }) => {
  const entityExists = await repository.exist(predicate);

  if (entityExists) {
    throw new ValidationError(
      `${repository.modelName} already exists!`,
      ERROR_TYPES.INVALID_DATA
    );
  }
};
