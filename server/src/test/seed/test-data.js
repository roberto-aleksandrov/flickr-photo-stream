/* eslint-disable no-plusplus */
import faker from 'faker';

export const createUser = () => ({
  email: faker.internet.email(),
  givenName: faker.name.findName(),
  familyName: faker.name.findName()
});

export const createUsers = count => {
  const users = new Array(count);

  for (let index = 0; index < count; index++) {
    users[index] = createUser();
  }

  return users;
};

export const ERROR_MESSAGES = {
  USER_EXISTS: 'User already exists!',
  USER_IS_MISSING: 'User does not exist!',
  INVALID_ID_FORMAT: 'Invalid Id!'
};
