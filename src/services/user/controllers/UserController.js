const prisma = require("../../../configs/database/instance");
const response = require("../../../utils/response");
const { GetAllUsersRepository, GetUserRepository, UpdateUserRepository} = require('../repositories');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await GetAllUsersRepository();
            return response({ res, data: users, code:200, message: "Get all user success" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    },
    getUser: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await GetUserRepository({ id });
            return response({ res, data: user, code:200, message: "Get user success" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    },
    addDetailUser: async (req, res)=> {
        const {sub_riset, cv, portfolio, no_hp, user_id} = req.body

        try {
            const isDetailExist = await prisma.users_detail.findUnique({
                where: {user_id: user_id}
            });
            
            let result;

            if(isDetailExist) {
                result = await prisma.users_detail.update({
                    where: {user_id: user_id},
                    data: {
                        sub_riset: sub_riset,
                        cv: cv,
                        portfolio: portfolio,
                        no_hp: no_hp,
                        user: {
                            connect: {id: user_id}
                        }
                    }
                });
                response({ res, data: result ,code:200, message: "Update detail success" })
            } else {
                result = await prisma.users_detail.create({
                    data: {
                        sub_riset: sub_riset,
                        cv: cv,
                        portfolio: portfolio,
                        no_hp: no_hp,
                        user: {
                            connect: {id: user_id}
                        }
                    }  
                });
                console.log(user_id);
                response({ res, data: result ,code:200, message: "Detail success created" })
            }   
        } catch (error) {
            res.status(500).json({ message: error, error: error.message});
        }
    },
    editUser: async (req, res) => {
        const { id } = req.params;
        const dataUpdate = req.body;
        try {
            const user = await UpdateUserRepository({ id }, dataUpdate);
            return response({ res, data: user,code:200, message: "Update using id success " })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    },
    me: async (req, res) => {
        const {id} = req.userData
        try {
            const user = await GetUserRepository({ id });
            return response({ res, data: user,code:200, message: "Get current success" })
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    }
}