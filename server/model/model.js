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

module.exports = {
  getAll(cb) {
        getDataFromFile(cb);
    }

};
