import mongoose from 'mongoose';

import { userSchema } from '../schemas';

const usersRepository = mongoose.model('User', userSchema);

export default usersRepository;
