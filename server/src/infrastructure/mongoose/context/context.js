import mongoose from 'mongoose';

export default {
  connect: async ({ connectionString }) =>
    mongoose.connect(connectionString, {
      useNewUrlParser: true
    })
};
