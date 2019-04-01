import { Schema } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  givenName: {
    type: String,
    required: true
  },
  familyName: {
    type: String,
    required: true
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
