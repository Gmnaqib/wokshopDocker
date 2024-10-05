const { announcement: announcementModel } = require('../../../utils/database');

module.exports = async (params) => {
  const { id } = params;
  const research = await announcementModel.findUnique({
    where: {
      id: +id
    }
  })
  return research;
};
