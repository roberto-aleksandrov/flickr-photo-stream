import mongoose from 'mongoose';
import { normalizeObjectId } from '../../utilities';

const updatableEvaluator = Model => ({
  update: async (spec, data) => {
    const response = await Model.update(normalizeObjectId(spec.where), data);

    return response;
  },
  updateById: async (id, data) => {
    const response = await Model.findOneAndUpdate(
      mongoose.Types.ObjectId(id),
      data,
      { new: true }
    );

    return response;
  }
});

export default updatableEvaluator;
