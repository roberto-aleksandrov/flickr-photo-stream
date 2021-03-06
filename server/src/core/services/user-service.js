import {
  CreateUserValidationSchema,
  UpdateUserValidationSchema
} from '../validation-schemas';

const initialize = ({ repository, validator }) => ({
  getAll: async () => {
    return repository.list({});
  },
  getById: async ({ id }) => {
    await validator
      .new()
      .hasValidId(id)
      .exist({ id })
      .validate();

    const user = await repository.getById(id);

    return user;
  },
  async create({ userBm }) {
    await validator
      .new()
      .modelIsValid({ schema: CreateUserValidationSchema, entity: userBm })
      .isNonExistent({ where: { email: userBm.email } })
      .validate();

    const user = await repository.create(userBm);

    return user;
  },
  async update({ id, userBm: { email, ...rest } }) {
    await validator
      .new()
      .hasValidId(id)
      .modelIsValid({ schema: UpdateUserValidationSchema, entity: rest })
      .exist({ where: { id } })
      .validate();

    const user = await repository.updateById(id, rest);

    return user;
  },
  async delete({ id }) {
    await validator
      .new()
      .hasValidId(id)
      .exist({ where: { id } })
      .validate();

    await repository.deleteById(id);
  }
});

export default { initialize };
