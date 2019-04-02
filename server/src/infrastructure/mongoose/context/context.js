import mongoose from 'mongoose';

export default {
  connect: ({ connectionString }) =>
    mongoose.connect(connectionString, {
      useNewUrlParser: true
    })
};
