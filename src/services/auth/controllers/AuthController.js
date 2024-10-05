const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require('jsonwebtoken')
const prisma = require("../../../configs/database/instance");
const response = require("../../../utils/response");
const CheckRegistrationRepository = require("../repository/CheckRegistrationRepository")
const LoginRepository = require("../repository/LoginRepository")


module.exports = {
    
    register: async (req, res) => {
        try {
            const { name, nim,  email, password, role, gender, entry_year, major, motivation, telegram } = req.body;
            
            if(isNaN(+nim)) {
                return response({res, message: "nim must be number", is_from_cache:false, data:null, code:500})
            }
            if(nim.length != 8) {
                return response({res, message: "nim must be 8 character", is_from_cache:false, data:null, code:500})
            } 

            const cekRegistered = await CheckRegistrationRepository(email, nim)
            if (cekRegistered) {
                return response({ res, message: "User already registered", is_from_cache: false, data: null, code: 400 });
            }
        
            const hashedPassword = await bcrypt.hash(password, 10);
            const result = await prisma.users.create({
                data: {
                    name:name,
                    nim:nim,
                    email:email,
                    password:hashedPassword,
                    role:role,
                    gender:gender,
                    entry_year:entry_year,
                    major: major,
                    motivation:motivation,
                    telegram: telegram
                }
            })
            return response({ res, data: result,code:200, message: "User created" }) 
        } catch (error) {
            return response({res, message: "user error", is_from_cache:false, data:null, code:400})
        }
    },
    login: async (req, res) => {
        try {
            const{email, password} = req.body;
            const user = await LoginRepository(email)
    
        if(!user) {
            return response({res, message:"User not found", is_from_cache:false, data:null, code:404})
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if(isPasswordValid) {
            const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
            }
            const secret = process.env.JWT_SECRET;
            const expiresIn = 60 * 60 * 5;
            const token = jwt.sign(payload, secret,{expiresIn: expiresIn} )
            return response({ res, data:{
                id: user.id,
                name: user.name,
                email: user.email,
                token: token
            }, user,code:200, message: "success" })
        } else {
            return response({res, message:"email or password wrong", is_from_cache:false, data:null, code:403})
        }
        } catch (error) {
            return response({res, message:error.message, is_from_cache:false, data:null, code:500})
        }
    }
}