const { users: usersModel } = require('../../../utils/database');

module.exports= async (email, nim) => {
  const user = await usersModel.findFirst({
    where: {
        OR: [
            { email: email },
            { nim: nim }
        ]
    }
  });
  return user;
}
