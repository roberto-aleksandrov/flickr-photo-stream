// import * as Yup from 'yup';

// const UpdateUserShape = {
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Required'),
//   givenName: Yup.string()
//     .min(4, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   familyName: Yup.string()
//     .min(4, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required')
// };
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

// const CreateUserShape = {
//   ...UpdateUserShape,
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Required')
// };

// export const UpdateUserValidationSchema = Yup.object().shape(UpdateUserShape);

// export const CreateUserValidationSchema = Yup.object().shape(CreateUserShape);
