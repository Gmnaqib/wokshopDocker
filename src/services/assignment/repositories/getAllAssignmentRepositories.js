const { assigment: assigmentModel } = require('../../../utils/database');

module.exports= async () => {
  const assigment = await assigmentModel.findMany({
    include: {
      user: {select: {
        id: true,
        nim: true,
        name: true,
        email: true,
        entry_year: true,
        major: true,
        gender: true,
      }},
    }
  });
  return assigment;
}
