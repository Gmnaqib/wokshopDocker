const response = require("../../../utils/response");
const prisma = require("../../../configs/database/instance");
const getAllAssignmentRepositories = require("../repositories/getAllAssignmentRepositories");
const getAssignmentRepositories = require("../repositories/GetAssignmentRepository")


module.exports = {
    uploadAssignment: async (req, res) => {
        const {id: user_id} = req.userData
        const{assigment_link} = req.body;
        try {
            const assignment = await prisma.assigment.create({
                data: {
                    assigment_link: assigment_link,
                    user: {
                        connect:{
                            id: user_id
                        }
                    }
                }
            })
            return response({ res, data: assignment,code:200, message: "Assignment created" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    },

    getAllAssignment: async(req, res) => {
        try {
            const assignment = await getAllAssignmentRepositories();
            return response({ res, data: assignment, code:200, message: "success" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    },
    getAssignment: async (req, res) => {
        try {
            const { id } = req.params;
            const assigment = await getAssignmentRepositories({ id });
            return response({ res, data: assigment, code:200, message: "Get assignment success" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    }
}