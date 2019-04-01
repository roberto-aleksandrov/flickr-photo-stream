import { prop, when, lensProp, over, pipe } from 'ramda';
import mongoose from 'mongoose';

import { renameKeys } from '../../../utilities/functions';

const normalizeObjId = when(
  prop('id'),
  pipe(
    over(lensProp('id'), mongoose.Types.ObjectId),
    renameKeys({ id: '_id' })
  )
);

export default normalizeObjId;
