const { announcement: announcementModel } = require('../../../utils/database');

module.exports= async () => {
  const announcement = await announcementModel.findMany({});
  return announcement;
}
