const DataMhs = require('./model');

exports.getAllData = (req, res, next) => {
    DataMhs.getAll(datamhs =>{
        res.json(datamhs);
    })
};
