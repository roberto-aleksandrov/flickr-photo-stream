import { Router } from 'express';
import { USER_ROUTES } from '../constants';

const initialize = app => ({ userService }) => {
  const usersRouter = new Router();

  usersRouter.get('/', async (req, res) => {
    const users = await userService.getAll();

    res.status(200).json(users);
  });

  usersRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    const users = await userService.getById({ id });

    res.status(200).json(users);
  });

  usersRouter.post('/', async (req, res) => {
    const userBm = req.body;

    const user = await userService.create({ userBm });

    res.status(200).json(user);
  });

  usersRouter.put('/:id', async (req, res) => {
    const {
      body: userBm,
      params: { id }
    } = req;

    const user = await userService.update({ id, userBm });

    res.status(200).json(user);
  });

  usersRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;

    await userService.delete({ id });

    res.status(200).json({ id });
  });

  app.use(USER_ROUTES.PREFIX, usersRouter);
};

export default { initialize };
