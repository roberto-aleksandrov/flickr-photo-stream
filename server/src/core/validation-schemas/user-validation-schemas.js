export const UpdateUserValidationSchema = {
  givenName: {
    presence: true,
    length: {
      minimum: 4
    }
  },
  familyName: {
    presence: true,
    length: {
      minimum: 4
    }
  }
};

export const CreateUserValidationSchema = {
  ...UpdateUserValidationSchema,
  email: {
    presence: true,
    length: {
      minimum: 4
    }
  }
};
