// promiseRejected.js 을 async으로 바꾼 것

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

// --------------------------------------------------------
// async , promise 비교

async function func1() {
    try {
        const middle = await middleSchool();
        const high = await highSchool(middle).catch(err => `검정고시`); // chaining
        const university = await univ(high); // chaining
        console.log(university);
    } catch (error) {
        console.error(error);
    } finally {
        console.log('finally는 무조건 실행');
    }
}

func1();

// middleSchool() //
//     .then(school => highSchool(school))
//     .catch(err => {
//         return `검정고시`;
//     })
//     .then(school => univ(school))
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

