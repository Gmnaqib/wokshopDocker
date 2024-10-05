const {users:UsersModel} = require('../../../utils/database')
// const {users_detail:UsersDetailModel} = require('../../../utils/database')

module.exports= async () => {
    const users = await UsersModel.findMany({
        select : {
            id: true,
            name: true,
            nim:true,
            email:true,
            role:true,
            gender:true,
            entry_year:true,
            major: true,
            motivation:true,
            telegram: true,
            detail: {select: {
                id: true,
                user_id: true,
                sub_riset: true,
                cv: true,
                no_hp: true,
                portfolio: true
            }}
        }
    });
    return users;
}
