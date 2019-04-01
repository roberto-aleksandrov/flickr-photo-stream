import mongoose from 'mongoose';

const deletableEvaluator = Model => ({
  deleteById: async id => {
    const response = await Model.create(mongoose.Types.ObjectId(id));

    return response;
  }
});

export default deletableEvaluator;
