// Without running the code below, explain in your own words what the result
// of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix them.

// Block 1
function funcA() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

funcA();

// You console.log() the var 'a' before it's declaration. It will print 'undefined', because even though 
//the declaration of var will be hoisted and JS will know the var 'a', it won't know the value inside.
//There is no hoisting to the value, only to the declaration of the var.
//To fix it: first declare the variable 'a' and after that console.log() it.
//the console.log() of foo() will print '2', because there is hoisting to function declarations.

// Block 2
var fullName = 'John Doe';
var obj = {
        fullName: 'Colin Ihrig',
        prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
            }
        }
    };
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
//There are 2 properties named 'fullname' inside obj: one is a direct property of obj and one is nested inside
//the sub-object 'prop'. There is no way to get access to the value of the outer fullname property
//with the inner getFullName method. The name that will be printed on line 34 will be 'Aurelio De Rosa'.
//On line 35 you save the method getFullName itself inside 'test', and not what it returnes. 
//When you console.log it on line 36 and try to run test() it will return undefined, because it doesn't have
//access to 'this.fullName' on the global scope. (on the browser, it will print John Doe.) 



// Block 3
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

//b is defined without a variable type, so it's leaked to the global scope. If there is another variable named
//'b' on other parts of the codes, there is a risk of bugs. We need to declare 'b' with a variable type.
//'a' is only available inside the function scope, so 'typeof a' will return 'undefined'.
//if we try to print 'a' outside funcB, we'll get an error message.


// Block 4
function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();

//Both functions are declared with the same name. Since function are hoisted, the second one will overide 
//the first one and the function calls with that name will print '2'. If there was for example another
//function with that name below the second one that console.log("3"), all the functions calls will print 3.
//To fix this, we need to pick different names to the functions.


//Block 5
function funcD1() {
    d = 1;
}
funcD1();
console.log(d);

function funcD2() {
    var e = 1;
}

funcD2();
console.log(e);

//'d' is not declared with a variable type, so it will be leaked to the global scope and the console.log()
//on line 83 will print its value.
//the console.log() on line 90 won't work since the variable 'e' is confined to the function scope.
//The function call funcD1() can risk another place in the code if there is another variable 'd' declared somewhere.
//the function call funcD2() won't do anything besides creating a variable that will "die" after the function done running.

//Block 6
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

//The console.log() inside funcE will print 1, since the call to funcE() is done AFTER the declaration of 'f'.
//The console.log() on line 102 will print 'undefined', since it is printed before the variable declaration,
//and the hoisting to 'f' is only to its declaration and not the value. To fix this, we need to call console.log()
//on a variable only after the line it was declared at.

