// const { GetAllUsersRepository } = require('../../user/repositories');
// const jwt = require("jsonwebtoken");

// module.exports = async (req, res, next) => {
// const accessValidation = (req, res, next) => {
//     const {authorization} = req.headers;
    
//     if(!authorization) {
//         return res.status(401).json({
//             message: "Need token"
//         })
//     }

//     const token = authorization.split(' ')[1];
//     const secret = process.env.JWT_SECRET

//     try {
//         const jwtDecode = jwt.verify(token, secret)
//         req.userData = jwtDecode
//     } catch (error) {
//         return res.status(401).json({
//             message: "Unauthorized"
//         })
//     }
//     next()
//     }

// }