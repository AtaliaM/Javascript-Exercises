function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function() {
    if (this.a === this.b && this.b === this.c && this.c === this.d) {
        console.log("true");
        return true;
    }
    else {
        console.log("false");
        return false;
    }
}

let mySquare = new Square(3,3,3,3);
mySquare.isSquare();

let mySecondSquare = new Square(3,3,2,3);
mySecondSquare.isSquare();

// You are given a function, Square, that takes four parameters, a, b, c, d,
// denoting the length of the square edges.
// Using prototype properties, add a method to Square named isSquare that
// prints true if a Square object has equal edges and false if they are unequal.