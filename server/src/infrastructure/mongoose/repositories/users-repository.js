import mongoose from 'mongoose';
import specificationEvaluator from '../specification/specification-evaluator';

import { userSchema } from '../schemas';

const User = mongoose.model('User', userSchema);

export default specificationEvaluator(User);
