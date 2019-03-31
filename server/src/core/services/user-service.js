import mongoose from 'mongoose';
import { ValidationError } from '../../utilities/errors';
import { ERROR_TYPES } from '../../utilities/error-types';

const initialize = ({ usersRepository }) => ({
  getAll: async () => {
    return usersRepository.find({});
  },
  getById: async id => {
    const objectIdIsValid = mongoose.Types.ObjectId.isValid(id);

    if (!objectIdIsValid) {
      throw new ValidationError('Invalid Id!', ERROR_TYPES.INVALID_DATA);
    }

    const user = await usersRepository.findById({
      _id: mongoose.Types.ObjectId(id.toString())
    });

    console.log(user);

    if (!user) {
      throw new ValidationError(
        'User does not exist!',
        ERROR_TYPES.INVALID_DATA
      );
    }

    return user;
  },
  async create({ userBm }) {
    const userExists = await this.userEmailExists({ email: userBm.email });

    if (userExists) {
      throw new ValidationError('User exists!', ERROR_TYPES.EXISTS);
    }

    const user = await usersRepository.create(userBm);

    return user;
  },
  async update({ id, userBm: { email, ...rest } }) {
    const objectIdIsValid = mongoose.Types.ObjectId.isValid(id);

    if (!objectIdIsValid) {
      throw new ValidationError('Invalid Id!', ERROR_TYPES.INVALID_DATA);
    }

    const userExists = await this.userEmailExists({
      _id: mongoose.Types.ObjectId(id.toString())
    });

    if (!userExists) {
      throw new ValidationError(
        'User does not exists!',
        ERROR_TYPES.INVALID_DATA
      );
    }

    await usersRepository.findByIdAndUpdate(id, rest);
  },
  async delete({ id }) {
    const objectIdIsValid = mongoose.Types.ObjectId.isValid(id);

    if (!objectIdIsValid) {
      throw new ValidationError('Invalid Id!', ERROR_TYPES.INVALID_DATA);
    }

    const userExists = await this.userEmailExists({
      _id: mongoose.Types.ObjectId(id.toString())
    });

    if (!userExists) {
      throw new ValidationError(
        'User does not exists!',
        ERROR_TYPES.INVALID_DATA
      );
    }

    await usersRepository.findByIdAndDelete(id);
  },
  async userEmailExists(conditions) {
    const usersCount = await usersRepository.count(conditions);

    return usersCount >= 1;
  }
});

export default { initialize };
