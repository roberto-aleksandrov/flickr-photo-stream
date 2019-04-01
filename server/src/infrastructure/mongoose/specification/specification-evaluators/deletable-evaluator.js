import mongoose from 'mongoose';

const deletableEvaluator = Model => ({
  deleteById: async id => {
    const response = await Model.findByIdAndDelete(mongoose.Types.ObjectId(id));

    return response;
  }
});

export default deletableEvaluator;
