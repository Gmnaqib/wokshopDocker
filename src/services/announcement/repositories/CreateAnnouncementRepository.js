const { announcement: announcementModel } = require('../../../utils/database');

module.exports= async (title, description, category, type_id) => {
  const announcement = await announcementModel.create({
    data: {
        title: title,
        description:description,
        category:category,
        type: {
            connect:{
                id: type_id
            }
        }
    }
  });
  return announcement;
}
