const response = require("../utils/response")

module.exports = () => async (req, res) => {
  return response({ res, message: 'Successfuly Get All Data',data:null, code: 200 , is_from_cache: true})
}