import { Schema } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String
  },
  givenName: {
    type: String
  },
  familyName: {
    type: String
  },
  created: {
    type: Date
  }
});

// eslint-disable-next-line func-names
userSchema.pre('save', function(next) {
  this.created = new Date();
  next();
});

export default userSchema;
