// https://poiemaweb.com/es6-promise
// promise의 3가지 상태
// pending : 최초 생성되어서 비동기 작업을 수행중인 상태
// fullfilled : 비동기 작업이 성공적으로 완료된 상태
// rejected : 비동기 작업이 실패한 상태 ex. 네트워크 오류, 파일 읽기 오류

const promise = new Promise((resolve, reject) => {

    console.log('promise test');
})

const getNumber = new Promise ((resolve, reject) => {
    console.log("getNumber Pending");
    setTimeout(() => {
        resolve(100);
        console.log(1)
    },1000);
})

// promise 만들어지고 resolve 호출하면 fullfilled 상태가 되어서
// then으로 결과값을 전달할 수 있다.
getNumber.then(value => console.log(value));

getNumber //
    .then(value => { // 준비된 값을 넘기기 때문에 1초
        console.log(value);
        return value * 2;
    })
    .then(value => { // 준비된 값을 넘기기 때문에 1초
        console.log(value);
        return value * 3;
    })
    .then(value => { // promise를 연결해서 change할 수 있음 ?
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value + 1000);
            }, 1000)
        })
    })
    .then(value => console.log(value));

// 프로미스가 생성되면 fullfilled가 되든 말든 로직이 실행이 된다.
// 따라서 .then 을 실행하게 되면 resolve 함수는 이미 실행이 되었었기 때문에 .then 결과값 실행 부분도 1초씩 걸린다
// 하지만 만약 .then 결과값을 받아올 때 promise 내용을 수정?하게 되면 1초가 더 걸려서 총 2초가 걸린다.