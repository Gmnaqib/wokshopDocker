const { sub_riset: risetModel } = require('../../../utils/database');

module.exports= async () => {
    const subRiset = await risetModel.findMany({
        include: {
            courses: true
        }
    });
    return subRiset;
  }