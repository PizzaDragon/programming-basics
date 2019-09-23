//opdracht 1
let grade = 7;

if (grade < 6) {
    console.log("onvoldoende")
}

else if (grade >= 6 && grade <= 7) {
    console.log("voldoende")
}

else if (grade >=7 && grade <= 9) {
    console.log("goed")
}

else if (grade > 9) {
    console.log("uitmuntend")
}

else {console.log("failure")}


//opdracht 2
let remark = 6
switch (true) {
    case remark < 6: 
        console.log("onvoldoende");
        break;

    case remark >= 6 && remark <= 7:
        console.log("voldoende");
        break;

    case remark >=7 && remark <=9:
        console.log("goed");
        break;

    case remark > 9:
        console.log("uitmuntend");
        break;

    default:
        console.log("failure")
}

//opdracht 3
let purchasedBook = true;
let job = 'teacher';
let inTrain = true;

if (purchasedBook == true && job == 'teacher' && inTrain == true) {
    console.log("finally i can enjoy my book");
}

else {
    console.log("you can't enjoy books")
}