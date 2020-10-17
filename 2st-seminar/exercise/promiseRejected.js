
const 자퇴 = false;
const middleSchool = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`중학교`);
    }, 1000)
});
// 중학교라는 함수 resolve

const highSchool = school => new Promise((resolve, reject) => {
    if (자퇴) {
        setTimeout(() => {
            reject(new Error('에러!'));
        })
    } else {
        setTimeout(() => {
            resolve(`${school} => 고등학교`);
        }, 1000)
    }
});
// 중학교의 값을 고등학교에 담아서 또 다시 resolve

const univ = school => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`${school} => 대학교`);
    }, 1000)
});
// 중,고등학교 정보를 담아서 또 다시 resolve

middleSchool() //
    .then(school => highSchool(school))
    .catch(err => {
        return `검정고시`;
    })
    .then(school => univ(school))
    .then(result => console.log(result))
    .catch(error => console.error(error));
    // 맨 마지막에 캐치 위치 => 에러 잡을 수 있음

// 자퇴 true ~> 검정고시 => 대학교
// 자퇴 false ~> 중학교 => 고등학교 => 대학교

// promise chaining - 여러개의 프로미스를 연결해서 사용하는 것을 의미