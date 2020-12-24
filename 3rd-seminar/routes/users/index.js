const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
let userDB = require('../../modules/users');
const user = require('../../../4th-seminar/models/user');

router.post('/signup', (req, res) => {
    //1. req.body에서 데이터 가져오기
    const { id, password } = req.body; 
    //2. request data 확인하기, id 또는 password data가 없다면 Nullvalue로 반환
    if(!email || !password) {
      console.log('필요한 값이 없습니다!');
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
  
    try{
        //3. 존재하는 아이디인지 확인
        const alreadyId = usersDB.find(alreadyId => user.id == id);
      if(alreadyId){
        console.log('이미 존재하는 이메일 입니다.');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
      }
      //4. salt 생성
      const salt = crypto.randomBytes(64).toString('base64');
      //5. pbkdf2방식으로 암호화된 password 만들기
      const hashedPassword = crypto.pbkdf2(password, salt.toString(), 10000, 64, 'sha512').toString('base64');
      //6. userDB에 id, 암호화된 password, salt저장
      userDB.push({
        id,
        password: hashedPassword,
        salt,
      });
      //7. status 200, data는 id 반환
      return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_UP_SUCCESS, id));
    } catch (error) {
      console.error(error);
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SIGN_UP_FAIL));
    }

})

router.post('/signin', (req, res) => {
    //1. req.body에서 데이터 가져오기
    const {email, password} = req.body; 
    //2. request data확인, 아이디나 패스워드 데이터가 없다면 널 변환
     if(!id || !password) {
      console.log('필요한 값이 없습니다!');
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
     }
     
    try{
        //3. 존재하는 아이디인지 확인
        const alreadyId = usersDB.find(alreadyId => user.id == id);
      if(alreadyId){
        console.log('이미 존재하는 이메일 입니다.');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL));
      }
      //4. 비밀번호 확인
      const { salt, password: hashedPassword } = alreadyId;
      const inputPassword = crypto.pbkdf2(password, salt.toString(), 10000, 64, 'sha512').toString('base64');
      if (inputPassword == user.password) {
        //5. status 200, data는 id 반환
        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_IN_SUCCESS, id));
      } else {
        console.log('비밀번호가 일치하지 않습니다.');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
      }
    } catch (error) {
      console.error(error);
      return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SIGN_IN_FAIL));
    }

})

router.get('/', (req, res) => {
    const users = userDB;
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_READ_ALL_SUCCESS, id, password, salt))
})

module.exports = router;
