console.log('start');
setTimeout(() => {
    console.log('wait 3 seconds');
}, 3000);
console.log('end');

// console.log('start');
// setTimeout(() => {
//     console.log('wait 0 seconds');
// }, 0);
// 0초라서 start wait 0 end 순일 것 같지만
// 0초 동안 백그라운드에서 기다려야 하므로 위 코드와 똑같이
// start end wait0 순으로 나온다
// console.log('end');