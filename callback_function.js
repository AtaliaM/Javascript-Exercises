
function printStr(str) {
    console.log(str);
}

function isCallbackAFunction(str, func) {
    func(str);
 }

isCallbackAFunction("Hello World", printStr);







// function greeting(name) {
//     alert('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);
