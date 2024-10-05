const { assigment: assigmentModel } = require('../../../utils/database');

module.exports= async (title, description, category, type_id) => {
  const assigment = await assigmentModel.create({
    data: {
        title: title,
        description:description,
        category:category,
        type: {
            connect:{
                id: type_id
            }
        }
    }
  });
  return assigment;
}
