

let testCase1 = "4\n4\n# a # #\n# # - #\n# + # #\n# # # #";

let testCase2 = "10\n11\n# # # # # # # # # #\n# 9 9 . . . . 3 3 #\n# 9 # . . . . . . #\n# . # . . . . . . #\n# . . 5 . . . . . #\n# + + + + + 5 . . #\n# + + + + + + # . #\n# + + + + + . # 9 #\n# 3 3 . . . . 9 9 #\n# # # # # # # # # #";

let testCase3 = "sense ahead 1333 3 food ; [ 0]\nmove 2 0 ; [ 1]\npickup 8 0 ; [ 2]\nflip 3 4 5 ; [ 3]\nturn left 0 ; [ 4]\nflip 2 6 1223674 ; [ 5]\nturn right 0 ; [ 6]\nmove 0 3 ; [ 7]\nsense ahead 9 11 home ; [ 8]\nmove 10 8 ; [ 9]\ndrop 0 ; [10]\nflip 3 12 13 ; [11]\nturn left 8 ; [12]\nflip 2 14 15 ; [13]\nturn right 8 ; [14]\nmove 8 11 ; [15]";

let testCase4 = "sense notaword 1 3 food ; [ 0]\nmove 2 0 ; [ 1]\npickup 8 0 ; [ 2]\nflip 3 4 5 ; [ 3]\nturn left 0 ; [ 4]\nflip 2 6 1223674 ; [ 5]\nturn right 0 ; [ 6]\nmove 0 3 ; [ 7]\nsense ahead 9 11 home ; [ 8]\nmove 10 8 ; [ 9]\ndrop 0 ; [10]\nflip 3 12 13 ; [11]\nturn left 8 ; [12]\nflip 2 14 15 ; [13]\nturn right 8 ; [14]\nmove 8 11 ; [15]";


console.log(validateMap(testCase1));
console.log(validateMap(testCase2));

console.log(validateBrain(testCase3));
console.log(validateBrain(testCase4));



