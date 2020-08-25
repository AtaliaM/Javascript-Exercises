function sevenBoom(N) {
    let num;
    let numInStr;
    let StrInArr;

    for (let i = 1; i <= N; i++) {
        
        num = i;

        if (i % 7 === 0) {

            numInStr = String(num);
            StrInArr = numInStr.split("");

            if (StrInArr.includes("7")) {
                console.log("BOOM-BOOM");
            }
            else {
                console.log("BOOM");
            }
        }

        else {
            console.log(i);
        }

        
    }

}

sevenBoom(70);