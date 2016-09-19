// for (var test = 10; test >= 1; test = test - 1) {
//     console.log(test);
// }

// for (var test = 3; test >= 1; test = test - 1) {
//     console.log("Have a great day!");
// }


// var score = 0
// while (score < 10) {
//     score = score + 1
//     console.log("Score: " + score);
// }

// var x = 0
// do {
//     x++
//     console.log("the number is: " + x);
// } while (x < 10);

for (var num = 0; num <= 100; num = num + 25) {
    if (num == 50) { 
        console.log("Halfway There " + num);
    } else {
        console.log(num)
    }
}

var userString = ("Funnel Cakes Have Got To Go");
for (var fire = 0; fire <= userString.length; fire++) {
    console.log(userString[fire])
}

for(var p in userString){
    console.log(userString[p])
}