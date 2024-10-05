const { course: courseModel } = require('../../../utils/database');

module.exports= async (params) => {
const { id } = params;
  const course = await courseModel.findUnique({
    where: {
        id: +id
      }
  });
  return course;
}
