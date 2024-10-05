const { users: UsersModel } = require('../../../utils/database');

module.exports = async (params, data) => {
  const { id } = params;
  const users = await UsersModel.update({
    where: {
      id: +id
    },
    data: data
  })
  return users;
};
