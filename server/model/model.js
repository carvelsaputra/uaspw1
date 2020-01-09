const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'mahasiswa.json'
);

const getDataFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log(err);
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class DataMhs {
    constructor(nama, npm, desc, urlPhoto) {
        this.nama = nama;
        this.npm = npm;
        this.desc = desc;
        this.urlPhoto = urlPhoto;
    }

    static getAll(cb) {
        getDataFromFile(cb);
    }

};
