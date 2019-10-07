//1
let i = 0;
while (i <= 19) {
    i++;
    if (i % 4 == 0) {
        console.log(i, "deelbaar door 4");
    }
    else {
        console.log(i, "niet deelbaar door 4")
    }
}

//2
let a = 0;
let b = 1;

while (a < 50) {
    b = (a + b);
    console.log(b);
    a = a + b;
    console.log(a);
}

//3
var arr = [2, 4, 8, 9, 12, 13];
var total = 0;
for (var f in arr) {
    total += arr[f];
    
}
console.log(total);