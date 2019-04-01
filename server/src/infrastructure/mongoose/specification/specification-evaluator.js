import { converge, unapply, mergeAll } from 'ramda';
import mongoose from 'mongoose';

import {
  creatableEvaluator,
  readableEvaluator,
  deletableEvaluator,
  updatableEvaluator
} from './specification-evaluators';

const isValidIdEvaluator = () => ({
  idIsValid: mongoose.Types.ObjectId.isValid
});

const specEvaluator = converge(unapply(mergeAll), [
  creatableEvaluator,
  readableEvaluator,
  updatableEvaluator,
  deletableEvaluator,
  isValidIdEvaluator
]);

export default specEvaluator;
