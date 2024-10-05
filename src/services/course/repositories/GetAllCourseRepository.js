const { course: courseModel } = require('../../../utils/database');

module.exports= async () => {
  const course = await courseModel.findMany({});
  return course;
}
