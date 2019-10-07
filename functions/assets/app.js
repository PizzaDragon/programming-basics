function fibonacci(){
    let a = 0;
    let b = 1;

    while (a < 50) {
        b = (a + b);
        console.log(b);
        a = a + b;
        console.log(a);
    }
}

fibonacci()

function happyNewYear(year) {
    for (let i = 11; i >= 0; i--){
        if (i > 0){
            console.log(i);
        }
        else {
            console.log("Happy", year);
        }
    }
}

happyNewYear(2020)
