const response = require("../../../utils/response");
const prisma = require("../../../configs/database/instance");
const GetAllResearchRepository = require("../repositories/GetAllResearchRepository")
const GetResearchRepositories = require("../repositories/GetResearchRepositories");
const getAllCourses = require("../repositories/GetAllCourseRepository")
const getCourseRepository = require("../repositories/GetCourseRepository")



module.exports = {
    subRiset: async (req, res) => {
        try {
            const{sub_riset_name} = req.body;
        const result = await prisma.sub_riset.create({
            data: {
                sub_riset_name: sub_riset_name
            }
        })
        return response({ res, data: result,code:200, message: "Sub research created" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    },
    getAllsubRiset: async (req, res) => {
       try {
            const subRiset = await GetAllResearchRepository()
            return response({ res, data: subRiset,code:200, message: "Get all sub research success"})
       } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
       }
    },
    getsubRiset: async (req, res) => {
        try {
            const { id } = req.params;
            const subRiset = await GetResearchRepositories({ id });
            return response({ res, data: subRiset, code:200, message: "Get sub research success" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    },
    addCourse: async (req, res)=> {
        try {
            const {title, link_course, research_id} = req.body
        const thumbnail = req.file.path.replace(/\\/g, '/');
        const result = await prisma.course.create({
            data: {
                title: title,
                link_course: link_course,
                thumbnail: thumbnail,
                research: {
                    connect: {
                        id: parseInt(research_id)
                    }
                }
            }
        })
        return response({ res, data: result, code:200, message: "Course created" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    },
    getAllCourse: async (req, res) => {
        try {
            const courses = await getAllCourses()
            return response({ res, data: courses,code:200, message: "Get all course success"})
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    },
    getCourse: async (req, res) => {
        try {
            const { id } = req.params;
            const course = await getCourseRepository({ id });
            return response({ res, data: course, code:200, message: "Get course success" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    }
}