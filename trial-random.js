function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        console.log(array[i]);
    }
    // console.log(array);
}

let arr =[20,5,76,899,42,25,65,0];
shuffleArray(arr);