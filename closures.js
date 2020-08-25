// Without running the code below, explain in your own words what the result
// of each block of code will be and why.

// Block 1

var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }

    b = 5;

    return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

//line 17 will return the function 'otherFunction'. There is no meaning to the parameter sent in line 17.
//line 18 run the 'otherFunction' (that was saved in firstResult), and it will return b.
//Since 'b' is not defined inside otherFunc, it will search for it in it's first outer scope, which is the outer
//function scope. b = 5 there, so line 18 will return 5.

//Block 2

var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a);

//b2() doesn't return anything.
//console.log(a) will print 1, since the only place it looks for 'a' is on the global scope, and it will find
//var a = 1;


//Block 3

let i;
for (i = 0; i < 3; i++) {
    const log = () => {
    console.log(i);
    }

    setTimeout(log, 100); // the number parameter tells how much time after setTimeout() is called it'll run.
}
//The function log() will print at the end 3 times the number 3. Because of the setTimeout function,
//the call to log() will be on hold, and will be executed only after the for loop finishes.
//When the loop finishes, i = 3. That's why when log() is finally executed, the 'i' it will print
//will be 3, and it will happen three times, because setTimeout was called three times inside the loop.
