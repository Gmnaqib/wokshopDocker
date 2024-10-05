const { users: usersModel } = require('../../../utils/database');

module.exports= async (email) => {
  const course = await usersModel.findUnique({
    where: {
        email: email
      }
  });
  return course;
}
