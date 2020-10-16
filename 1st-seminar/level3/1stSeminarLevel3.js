const members = require('./member')
const ybMembers = members.filter(mem => mem.status == 'YB');
const obMembers = members.filter(mem => mem.status == 'OB');

const shuffleMember = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = 0
    j = Math.floor(Math.random() * (i + 1))
    [array[i], array[j]] = [array[j], array[i]]
  }

  return array
}
// https://medium.com/@kimploo/바람직한-무작위-배열-fitting-random-array-in-javascript-882d69d49e23
// 정리하기 !

const makeGroup = groupNum => {
  let ybShuffled = shuffleMember(ybMembers)
  let obShuffled = shuffleMember(obMembers)

  let allGroup = []

  for (var i = 0; i < groupNum; i++) {
    allGroup.push([`${i}`])
  } // 초기화 방법 ㅠㅅㅠ?

  ybShuffled.forEach(member =>
    allGroup[ybShuffled.indexOf(mmemberem) % groupNum].push(member))
  obShuffled.forEach(member =>
    allGroup[obShuffled.indexOf(member) % groupNum].push(member))

  return allGroup
}

console.log(makeGroup(6))

