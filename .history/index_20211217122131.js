function strickEquals (a, b) {

    let typeOfA = typeof(a);
    let typeOfB = typeof(b);

    if (typeOfA == typeOfB && a == b) {
        return true;
    }
    if (a == NaN && b == NaN) {
        return false;
    }

    return false;

}

// function testStrickEquals(strickEquals) {

//     console.log(strickEquals("5", 5));
//     console.log(strickEquals(NaN, NaN));
//     console.log(strickEquals())

// }

console.log(strickEquals({}, {}));