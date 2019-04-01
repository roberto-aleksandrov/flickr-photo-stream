// import { mapObjIndexed } from 'ramda';

import { userService } from './services';

const initialize = (data, validator) => {
  return {
    userService: userService.initialize({
      repository: data.usersRepository,
      validator: validator({
        entityName: 'User',
        repository: data.usersRepository
      })
    })
  };
  // return mapObjIndexed(service => service.initialize(data, validator.new()), services);
};

export default { initialize };
