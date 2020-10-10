if(true) { 
    var x = 'var';
}

console.log(`var: ${x}`); // var: var

if(true) {
    let y = 'let';
}

console.log(`let: ${y}`); // error

function colorFunction() {
    if(true) {
        var color = 'blue';
        console.log(color); // blue
    }
    console.log(color); // blue
}

colorFunction();
console.log(color); // error