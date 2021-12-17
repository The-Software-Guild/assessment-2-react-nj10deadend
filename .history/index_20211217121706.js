function strickEquals (a, b) {

    let typeOfA = typeof(a);
    let typeOfB = typeof(b);

    if (typeOfA == typeOfB && a == b) {
        return true;
    }

    if (a = NaN && b == NaN) {
        return true;
    }

    return false;

}

console.log(strickEquals(NaN, NaN));