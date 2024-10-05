const { setting: SettingModel } = require('../../../utils/database');

module.exports= async () => {
  const setting = await SettingModel.findMany({});
  return setting;
}
