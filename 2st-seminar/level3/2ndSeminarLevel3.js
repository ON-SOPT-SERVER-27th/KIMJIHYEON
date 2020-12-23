const fs = require('fs')
const crypto = require('crypto')

const pwd = 'sopt1234';
const fileName = 'useFSpwd';

const base64 = crypto.createHash('sha512').update(pwd).digest('base64');
fs.writeFile(`${fileName}.txt`, base64, () => {
    console.log(`file[${fileName}] write complete`);
});