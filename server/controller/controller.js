const DataMhs = require('../model/model');

exports.getAllData = (req, res,next) => {
    DataMhs.getAll(DataMhs =>{
        res.json(DataMhs);
    })
};
