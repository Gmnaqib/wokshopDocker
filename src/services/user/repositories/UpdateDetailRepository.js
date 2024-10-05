const { users_detail: UsersDetailModel } = require('../../../utils/database');

module.exports = async (params, data) => {
  const { id } = params;
 
  const users_detail = await UsersDetailModel.update({
    where: {
      id: +id
    },
    data: data
  })
  return users_detail;
};
