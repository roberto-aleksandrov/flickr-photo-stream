import { prop, when, lensProp, over } from 'ramda';
import mongoose from 'mongoose';

const normalizeObjId = when(
  prop('id'),
  over(lensProp('id'), mongoose.Types.ObjectId)
);

export default normalizeObjId;
