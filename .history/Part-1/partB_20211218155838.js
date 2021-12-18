// Part B: Prototypal Inheritance
// You are given a function, Square, that takes four parameters, A, B, C, and D, denoting the length of the square's edges.
// Using prototype properties, add a method to Square named isSquare that prints true if a Square object has equal edges and false if they are unequal.
function Square(A, B, C, D) {
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;

    this.isSquare = () => {
        if (this.A <= 0 || this.B <= 0 || this.C <= 0 || this.D <= 0) {
            console.log("One or more sides are 0 or negative")
            return false;
        }

        if (this.A === this.B && this.A === this.C && this.A === this.D){
            return true;
        } else return false;
    }
}

let newSquare = new Square(4, 4, 4, 4);
let newQuadrilateral = new Square(4, 18, 9, 6);
console.log(newSquare)


console.log(newSquare.isSquare());
console.log(newQuadrilateral.isSquare());