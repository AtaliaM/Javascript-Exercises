function calculateAverageScore(arrScores) {
    let totalScores = 0;
    let average;

    for (let i = 0; i < arrScores.length; i++) {
        totalScores += arrScores[i];
    }

    average = Math.round(totalScores / arrScores.length);

    return average;
}

function printWinner(teamScoresArr, teamLeaderArr) {

    if (teamScoresArr[0] > teamScoresArr[1] && teamScoresArr[0] > teamScoresArr[2]) {
        console.log(`${teamLeaderArr[0]}'s team wins! They have an average of ${teamScoresArr[0]}.`)
    }
    else if (teamScoresArr[1] > teamScoresArr[0] && teamScoresArr[1] > teamScoresArr[2]) {
        console.log(`${teamLeaderArr[1]}'s team wins! They have an average of ${teamScoresArr[1]}.`)
    }
    else if (teamScoresArr[2] > teamScoresArr[0] && teamScoresArr[2] > teamScoresArr[1]) {
        console.log(`${teamLeaderArr[2]}'s team wins! They have an average of ${teamScoresArr[2]}.`)
    }
    
    else {
        console.log(`It is a tie! ${teamLeaderArr[0]} have average of ${teamScoresArr[0]},
${teamLeaderArr[1]} have average of ${teamScoresArr[1]} and ${teamLeaderArr[2]} have average of ${teamScoresArr[2]}.`)
    }
}

let JohnAverage = calculateAverageScore([89, 120, 103]);
let MikeAverage = calculateAverageScore([116, 94, 123]);
let MaryAverage = calculateAverageScore([97, 134, 105]);

printWinner([JohnAverage,MikeAverage, MaryAverage], ["John", "Mike", "Mary"]);



