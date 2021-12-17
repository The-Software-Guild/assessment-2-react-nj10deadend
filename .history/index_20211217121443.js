function strickEquals (a, b) {

    let typeOfA = tyepof(a);
    let typeOfB = tyepof(b);

    if (typeOfA == typeOfB && a == b) {
        return true;
    }

    return false;

}