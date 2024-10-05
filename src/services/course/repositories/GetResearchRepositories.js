const { sub_riset: risetModel } = require('../../../utils/database');

module.exports = async (params) => {
  const { id } = params;
  
  const research = await risetModel.findUnique({
    where: {
      id: +id
    },
    include: {
        courses: true,
    }
  })
  return research;
};
