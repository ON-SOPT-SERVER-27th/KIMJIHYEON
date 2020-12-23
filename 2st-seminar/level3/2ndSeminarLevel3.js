const fs = require('fs')
const crypto = require('crypto')

const pwd = 'sopt1234';
const fileName = 'useFSpwd';

crypto.randomBytes(64, (err, buf) => {
    // buf는 버퍼형식이기 때문에 base64 salt로 변경
    crypto.pbkdf2(pwd, buf.toString('base64'), 100000, 64, 'sha512', (err, key) => {
        fs.writeFile(`${fileName}.txt`, key.toString('base64'), () => {
            console.log(`file[${fileName}] write complete`);
        });
    });
  });