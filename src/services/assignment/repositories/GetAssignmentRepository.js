const { assigment: assigmentModel } = require('../../../utils/database');

module.exports= async (params) => {
    const { id } = params;
  const assigment = await assigmentModel.findUnique({
    where: {
        id: +id
      }
  });
  return assigment;
}
