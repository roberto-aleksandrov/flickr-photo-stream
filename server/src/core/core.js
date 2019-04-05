import { userService } from './services';

const initialize = ({ data, validator }) => {
  return {
    userService: userService.initialize({
      repository: data.usersRepository,
      validator: validator({
        repository: data.usersRepository
      })
    })
  };
};

export default { initialize };
