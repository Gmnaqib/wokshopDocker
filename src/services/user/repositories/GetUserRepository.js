const { users: UsersModel } = require('../../../utils/database');

module.exports = async (params) => {
  const { id } = params;
  
  
  const users = await UsersModel.findUnique({
    where: {
      id: +id
    },
    select : {
      id: true,
      name: true,
      nim:true,
      email:true,
      role:true,
      gender:true,
      entry_year:true,
      major: true,
      motivation:true,
      telegram: true,
      detail: {select: {
          id: true,
          user_id: true,
          sub_riset: true,
          cv: true,
          no_hp: true,
          portfolio: true
      }}
  }
  })
  return users;
};
