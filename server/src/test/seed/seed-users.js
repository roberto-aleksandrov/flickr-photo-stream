import mongoose from 'mongoose';
import { userSchema } from '../../infrastructure/mongoose/schemas';
import { createUser, createUsers } from './test-data';

const User = mongoose.model('User', userSchema);

export const seedUsers = async count => {
  return User.create(createUsers(count));
};

export const seedOne = () => {
  return User.create(createUser());
};
