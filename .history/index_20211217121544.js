function strickEquals (a, b) {

    let typeOfA = typeof(a);
    let typeOfB = typeof(b);

    if (typeOfA == typeOfB && a == b) {
        return true;
    }

    return false;

}

console.log(strickEquals("4", "4"));