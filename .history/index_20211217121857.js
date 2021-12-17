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

console.log(strickEquals([16, 16)));