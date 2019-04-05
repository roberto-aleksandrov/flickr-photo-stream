import {
  exist,
  hasValidId,
  isNonExistent,
  modelIsValid
} from './validation-functions';

const validator = ({ repository }) => ({
  modelIsValid(args) {
    this.validations.push(modelIsValid(args));
    return this;
  },
  isNonExistent(args) {
    this.validations.push(isNonExistent(args));
    return this;
  },
  hasValidId(args) {
    this.validations.push(hasValidId(args));
    return this;
  },
  exist(args) {
    this.validations.push(exist(args));
    return this;
  },
  async validate() {
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < this.validations.length; index++) {
      await this.validations[index]({
        repository
      });
    }
  },
  new() {
    const newValidator = validator({ repository });

    newValidator.validations = [];

    return newValidator;
  }
});

export default validator;
