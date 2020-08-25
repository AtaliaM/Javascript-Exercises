function returnGrade (numScore) {

    let grade;

    if (numScore >= 0 && numScore <= 64){
        grade = "F";
    }
    else if (numScore >= 65 && numScore <= 69) {
        grade = "D";
    }
    else if (numScore >= 70 && numScore <= 79) {
        grade = "C";
    }
    else if (numScore >= 80 && numScore <= 89) {
        grade = "B";
    }
    else if (numScore >= 90 && numScore <=100) {
        grade = "A";
    }
      
      return grade;
}

console.log(returnGrade(100));
console.log(returnGrade(0));
console.log(returnGrade(88));