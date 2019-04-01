import mongoose from 'mongoose';
import { normalizeObjectId } from '../../utilities';

const readEvaluator = Model => ({
  list: async spec => {
    const query = Model.find();

    query.find(normalizeObjectId(spec.where));

    query.skip(spec.skip || 0);

    if (spec.take) {
      query.limit(spec.take);
    }

    if (spec.order) {
      query.sort(spec.order);
    }

    return query.exec();
  },
  getById: async id => {
    const entity = await Model.findById(mongoose.Types.ObjectId(id));

    return entity;
  },
  exist: async spec => {
    const entitiesCount = await Model.countDocuments(
      normalizeObjectId(spec.where)
    );

    return entitiesCount > 0;
  }
});

export default readEvaluator;
