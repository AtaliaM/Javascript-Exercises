function returnRandomNumBetweenOneToTwenty() {
    return Math.floor(Math.random() * 20)+1;
}

function returnNumberEqualToUserInput(number, func) {
    
    let funcOutput = func();
    let numAttempts = 1;

    while (funcOutput !== number) {
        funcOutput = func();
        numAttempts++;
    }

    console.log(`It took ${numAttempts} attempts to get the right number.`);
}

returnNumberEqualToUserInput(20, returnRandomNumBetweenOneToTwenty);