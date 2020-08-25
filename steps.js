
function logStepShape(N) {
    let tempStr = "";
    let numSpaces;

    for (let i = 1; i <= N; i++) {
        
        for(let j = 1; j <= i; j++) {
            tempStr += "#";
        }

        numSpaces = N - tempStr.length;
        console.log(`"${tempStr}${" ".repeat(numSpaces)}"`);
        tempStr = "";
    }

}

logStepShape(4);