let d = new Date();
// let today = d.getDay();
let hour = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

switch (d.getDay()) {
    case 0:
      today = "Sunday";
      break;
    case 1:
      today = "Monday";
      break;
    case 2:
       today = "Tuesday";
      break;
    case 3:
      today = "Wednesday";
      break;
    case 4:
      today = "Thursday";
      break;
    case 5:
      today = "Friday";
      break;
    case 6:
      today = "Saturday";
  }

  console.log(`Today is ${today}.
Current time is: ${hour}:${minutes}:${seconds}`);

