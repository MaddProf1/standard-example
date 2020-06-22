// Ternary

//A ternary operator is written with a question mark (?) followed by a colon (:):

//(condition) ? expression when true : expression when false

let value = 11;

(value % 2 == 0) ? console.log("Even") : console.log("Odd");

let text = (value % 2 == 0) ? "Even" : "Odd"; //recommended use is for variable initialization



// from the in class exercise

let date = new Date();
let day = date.getDay();

console.log(day);


if (day == 0) { // day = 0 ***************** show this error
    day = "Sunday";
} else if (day == 1) {
    day = "Monday";
} else if (day == 2) {
    day = "Tuesday";
} else if (day == 3) {
    day = "Wednesday";
} else if (day == 4) {
    day = "Thursday";
} else if (day == 5) {
    day = "Friday";
} else {
    day = "Saturday";
}



if (day == "Saturday" || day == "Sunday") {
    console.log("It's the weekend, no MAD9014 class today!");
} else if (day == "Tuesday" || day == "Friday") {
    console.log("You have MAD9014 class today!");
} else {
    console.log("Sadly there is no MAD9014 class today!");
}

console.log("Today is " + day);

// alternative using switch statement:

date = new Date();
day = date.getDay();


// Note: duplicate case labels in switch block are allowed in JavaScript

switch (new Date().getDay()) {
    case 2:
    case 4:
    case 5:
        console.log("Sadly there is no MTM6302 class today!");
        break; 
    case 1:
    case 3:
        console.log("You have MTM6302 class today!");
        break;
    case 0:
    case 6:
        console.log("It's the weekend, no MTM6302 class today!");
        break;
    default: 
        console.log("Error");
}




switch (day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
	day = "Error";
}

console.log("Today is " + day);

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a week day");
        break; 
    case "Sunday":
    case "Saturday":
        console.log("It's the Weekend");
        break;
    default: 
        console.log("Error");
}


