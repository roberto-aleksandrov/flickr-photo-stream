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

const collectionNameEvaluator = Model => ({
  modelName: Model.modelName
});

const specEvaluator = converge(unapply(mergeAll), [
  creatableEvaluator,
  readableEvaluator,
  updatableEvaluator,
  deletableEvaluator,
  isValidIdEvaluator,
  collectionNameEvaluator
]);

export default specEvaluator;
