import { Router } from 'express';
import { USER_ROUTES } from '../constants';

const initialize = app => ({ userService }) => {
  const usersRouter = new Router();

  usersRouter.get(USER_ROUTES.GET, async (req, res) => {
    const users = await userService.getAll();

    res.status(200).json(users);
  });

  usersRouter.get(USER_ROUTES.GET_BY_ID, async (req, res) => {
    const { id } = req.params;

    const users = await userService.getById({ id });

    res.status(200).json(users);
  });

  usersRouter.post(USER_ROUTES.CREATE, async (req, res) => {
    const userBm = req.body;

    const user = await userService.create({ userBm });

    res.status(200).json(user);
  });

  usersRouter.put(USER_ROUTES.UPDATE, async (req, res) => {
    const {
      body: userBm,
      params: { id }
    } = req;

    const user = await userService.update({ id, userBm });

    res.status(200).json(user);
  });

  usersRouter.delete(USER_ROUTES.DELETE, async (req, res) => {
    const { id } = req.params;

    await userService.delete({ id });

    res.status(200).json({ id });
  });

  app.use(USER_ROUTES.PREFIX, usersRouter);
};

export default { initialize };
