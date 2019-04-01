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

const modelIsValidEvaluator = Model => ({
  modelIsValid: data => {
    const err = new Model(data).validateSync();

    return err ? err.message : undefined;
  }
});

const specEvaluator = converge(unapply(mergeAll), [
  creatableEvaluator,
  readableEvaluator,
  updatableEvaluator,
  deletableEvaluator,
  isValidIdEvaluator,
  modelIsValidEvaluator
]);

export default specEvaluator;
