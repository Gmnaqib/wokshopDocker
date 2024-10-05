const prisma = require("../../../configs/database/instance");
const response = require("../../../utils/response");
const GetSettingRepository = require('../repositories/getSettingRepositories')

module.exports= {
    getSetting: async(req, res) => {
        try {
            const setting = await GetSettingRepository();
            return response({ res, data: setting, code:200, message: "success" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    },
    addSetting: async (req, res) => {
        try {
            const {title, start, end} = req.body;
        const setting = await prisma.setting.create({
            data: {
                title: title,
                start: start,
                end: end
            }
        });
            return response({ res, data: setting,code:200, message: "Setting created" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    }
}