const express = require('express');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
let membersDB = require('../../modules/members');

/** 멤버를 생성 */
router.post('/', (req, res) => {
    //request 바디에서 받아올 값들을 선언 
  const { name, part, age } = req.body;

  if (!name || !part || !age) {
    console.log('필요한 값이 없습니다!');
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }
  // idx 값은 서버에서 값을 중해주기, 마지막 idx 값에서 하나 늘리기
  const idx = membersDB[membersDB.length - 1].idx + 1;
  membersDB.push({
    idx,
    name,
    part,
    age,
  })
  return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_CREATE_SUCCESS, membersDB));
});

/** 모든 멤버 조회 */
router.get('/', (req, res) => {
  const members = membersDB;
  return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_READ_ALL_SUCCESS, members));
});

/** idx 값으로 특정 멤버 조회 */
router.get('/:idx', (req, res) => { // idx값이랑 일치하는 member정보를 보고싶을 때 
    // params 에서 idx값을 받아와서 idx변수에 저장
  const { idx } = req.params;

  if( !idx ) {
    console.log('필요한 값이 없습니다!');
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }
  // 받아온 idx 값이 membersDB에 존재하는 데이터인지 체크
  const member = membersDB.find(member => member.idx == idx);

  if (member === undefined) {
    console.log('idx가 유효하지 않습니다.');
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }
  return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_READ_SUCCESS, member));
})

/** idx값으로 특정 멤버 삭제 */
router.delete('/:idx', (req, res) => {
  const { idx } = req.params;

  if( !idx ) {
    console.log('필요한 값이 없습니다!');
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }
  // 찾을 때완 다르게 filter메소드
  const member = membersDB.filter(member => member.idx == idx);

  if (member.length === 0) {
    console.log('idx가 유효하지 않습니다.');
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }
  // 멤버를 삭제해야해서 filter() 메서드를 사용해서 클라에게 받아온 idx 값이 아닌 것들만 골라서 다시 할당
  membersDB = membersDB.filter(member => member.idx != idx);
  return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_DELETE_SUCCESS, membersDB));
});

/** idx값으로 특정 멤버 정보 수정 */
router.put('/:idx', (req, res) => {
  const { idx } = req.params;
  const { name, part, age } = req.body;

  if( !idx ) {
    console.log('필요한 값이 없습니다!');
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  if (!name || !part || !age) {
    console.log('필요한 값이 없습니다!');
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }
  // findIndex() 메서드를 이용해서 idx 값이 몇번째 배열에 있는지 알 수 있음
  const memberIdx = membersDB.findIndex(member => member.idx == idx);

  if(memberIdx === -1) {
    console.log('idx가 유효하지 않습니다.');
    return  res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  membersDB[memberIdx] = {
    idx: Number.parseInt(idx),
    name,
    part,
    age,
  }
  return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_UPDATE_SUCCESS, membersDB));  
});

module.exports = router;