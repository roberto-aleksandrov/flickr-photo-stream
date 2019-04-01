const creatableEvaluator = Model => ({
  create: async data => {
    const response = await Model.create(data);

    return response;
  }
});

export default creatableEvaluator;
