const response = require("../../../utils/response");
// const prisma = require("../../../configs/database/instance");
const getAllAnnouncementRepository = require("../repositories/GetAllAnouncementRepositories")
const getAnnouncementRepository = require("../repositories/GetAnnouncementRepository")
const createAnnouncementRepository = require("../repositories/CreateAnnouncementRepository")


module.exports = {
    addAnnouncement: async (req, res) => {
        const{title, description, category, type_id} = req.body;
        try {
            const announcement = await createAnnouncementRepository(title, description, category, type_id)
            return response({ res, data: announcement,code:200, message: "Announcement created" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    },
    getAllAnnouncement: async(req, res) => {
        try {
            const announcement = await getAllAnnouncementRepository();
            return response({ res, data: announcement, code:200, message: "Get announcement success" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    },
    getAnnouncement: async(req, res) => {
        try {
            const { id } = req.params;
            const announcement = await getAnnouncementRepository({ id });
            return response({ res, data: announcement, code:200, message: "Get announcement success" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    }
}