

let testCase1 = "4\n4\n# a # #\n# # - #\n# + # #\n# # # #";

let testCase2 = "10\n11\n# # # # # # # # # #\n# 9 9 . . . . 3 3 #\n# 9 # . . . . . . #\n# . # . . . . . . #\n# . . 5 . . . . . #\n# + + + + + 5 . . #\n# + + + + + + # . #\n# + + + + + . # 9 #\n# 3 3 . . . . 9 9 #\n# # # # # # # # # #";

let testCase3 = "sense ahead 1333 3 food ; [ 0]\nmove 2 0 ; [ 1]\npickup 8 0 ; [ 2]\nflip 3 4 5 ; [ 3]\nturn left 0 ; [ 4]\nflip 2 6 1223674 ; [ 5]\nturn right 0 ; [ 6]\nmove 0 3 ; [ 7]\nsense ahead 9 11 home ; [ 8]\nmove 10 8 ; [ 9]\ndrop 0 ; [10]\nflip 3 12 13 ; [11]\nturn left 8 ; [12]\nflip 2 14 15 ; [13]\nturn right 8 ; [14]\nmove 8 11 ; [15]";

let testCase4 = "sense notaword 1 3 food ; [ 0]\nmove 2 0 ; [ 1]\npickup 8 0 ; [ 2]\nflip 3 4 5 ; [ 3]\nturn left 0 ; [ 4]\nflip 2 6 1223674 ; [ 5]\nturn right 0 ; [ 6]\nmove 0 3 ; [ 7]\nsense ahead 9 11 home ; [ 8]\nmove 10 8 ; [ 9]\ndrop 0 ; [10]\nflip 3 12 13 ; [11]\nturn left 8 ; [12]\nflip 2 14 15 ; [13]\nturn right 8 ; [14]\nmove 8 11 ; [15]";

let testCase5 = "sense ahead 1 3 food ; [ 0]\nmove 2 ; [ 1] absent value\npickup 8 0 ; [ 2]\nflip 3 4 5 ; [ 3]\nturn left 0 ; [ 4]\nflip 2 6 7 ; [ 5]\nturn right 0 ; [ 6]\nmove 0 3 ; [ 7]\nsense ahead 9 11 home ; [ 8]\nmove 10 8 ; [ 9]\ndrop 0 ; [10]\nflip 3 12 13 ; [11]\nturn left 8 ; [12]\nflip 2 14 15 ; [13]\nturn right 8 ; [14]\nmove 8 11 ; [15]";

let testCase6 = "10\n10\n# # # # # # # # # #\n# a 9 . . . . 3 3 #\n# 9 # . - - - - - #\n# . # - - - - - - #\n# . . 9 - - - - - #\n# + + + + + 5 . . #\n# + + + + + + # . #\n# + + + + + . # 9 #\n# 3 3 . . . . 0 9 #\n# # # # # # # # # #\n";

let testCase7 = "10\n10\n# # # # # # # # # #\n# 9 9 . . . . 3 3 #\n# 9 # . . . . . . #\n# . # . . . . . . #\n# . . 5 . . . . . #\n# + + + + + 5 . . #\n# + + + + + + # . #\n# + + + + + . # 9 #\n# 3 3 . . . . 9 9 #\n# # # # # # # # # #";

let testCase8 = "10\n10\n# # # # # # # # # #\n# 9 9 . . . . 3 3 #\n# 9 # . - - - - - #\n# . # - - - - - - #\n# . . 5 - - - - - #\n# + + + . + 5 . . #\n# + + + . + + # . #\n# + + + . + . # 9 #\n# 3 3 . . . . 9 9 #\n# # # # # # # # # #";

let testCase9 = "sense ahead 1 3 food ; [ 0]\nmove 2 0 ; [ 1]\npickup 8 0 ; [ 2]\nflip 3 4 5 ; [ 3]\nturn left 0 ; [ 4]\nflip 2 6 7 ; [ 5]\nturn right 0 ; [ 6]\nmove 0 3 ; [ 7]\nsense ahead 9 11 home ; [ 8]\nmove 10 8 ; [ 9]\ndrop 0 ; [ 10]\nflip 3 12 13 ; [ 11]\nturn left 8 ; [ 12]\nflip 2 14 15 ; [ 13]\nturn right 8 ; [ 14]\nmove 8 11 ; [ 15]";

let testCase10 = "sense ahead 1 3 food ; [ 0]\nmove 2 0 ; [ 1]\npickup 8 0 ; [ 2]\nflip 3 4 5 ; [ 3]\nturn left 0 ; [ 4]\nflip 2 6 7 ; [ 5]\nturn right 0 ; [ 6]\nmove 0 3 ; [ 7]\nsense ahead 9 11 home ; [ 8]\nmove 10 8 ; [ 9]\ndrop 0 ; [ 10]\nflip 3 12 13 ; [ 11]\nturn left 8 ; [ 12]\nflip 2 14 15 ; [ 13]\nturn right 8 ; [ 14]\nmove 8 11 ; [ 15]";

let testCase11 = "10\n10\n# # # # # # # # # #\n# 9 9 . . . . 3 3 #\n# 9 # . - - - - - #\n# . # - - - - - - #\n# . . 5 - - - - - #\n# + + + + + 5 . . #\n# + + + + + + # . #\n# + + + + + . . 9 #\n# 3 3 . . . . 9 9 #\n# # # # # # # # # #";

let testCase12 = "10\n10\n# # # # # # # # # #\n# 9 9 . . . . 3 3 #\n# 9 # . - - - - - #\n# . # - - - - - - #\n# . . 5 - - - - - #\n# + + + + + 5 . . #\n# + + + + + + # . #\n# + + + + + . # 9 #\n# 3 3 . . . . 9 9 #\n# # # # # # # # # #";


class TestCase
{
    constructor(testCase, type, message)
    {
        this.test = testCase;
        this.type = type;
        this.pass = "fail";
        
        this.message = message;
    }
}


var rs1 = validateMap(testCase1);
var rs2 = validateMap(testCase2);
var rs3 = validateBrain(testCase3);
var rs4 = validateBrain(testCase4);
var rs5 = validateBrain(testCase5);
var rs6 = validateMap(testCase6);
var rs7 = validateMap(testCase7);
var rs8 = validateMap(testCase8);
var rs9 = validateBrain(testCase9);
var rs10 = validateBrain(testCase10);
var rs11 = validateMap(testCase11);
var rs12 = validateMap(testCase12);

var tc1 = new TestCase(testCase1, "world", rs1);
var tc2 = new TestCase(testCase2, "world", rs2);

var tc3 = new TestCase(testCase3, "brain", rs3);
var tc4 = new TestCase(testCase4, "brain", rs4);

var tc5 = new TestCase(testCase5, "brain", rs5);
var tc6 = new TestCase(testCase6, "world", rs6);
var tc7 = new TestCase(testCase7, "world", rs7);
var tc8 = new TestCase(testCase8, "world", rs8);
var tc9 = new TestCase(testCase9, "brain", rs9);
var tc10 = new TestCase(testCase10, "brain", rs10);
var tc11 = new TestCase(testCase11, "world", rs11);
var tc12 = new TestCase(testCase12, "world", rs12);

if(tc1.message==="Borders not closed.")
{
    tc1.pass = "pass";
}

if(tc2.message==="Wrong Dimensions.")
{
    tc2.pass = "pass";
}

if(tc3.message==="Link to a non existent line")
{
    tc3.pass = "pass";
}

if(tc4.message==="Invalid token")
{
    tc4.pass = "pass";
}

if(tc5.message==="Incorrect Use of command")
{
    tc5.pass = "pass";
}

if(tc6.message==="Invalid character in the map")
{
    tc6.pass = "pass";
}

if(tc7.message==="One of the nests missing")
{
    tc7.pass = "pass";
}

if(tc8.message==="Swarms Not Linked")
{
    tc8.pass = "pass";
}

if(tc9.message==="Valid Brain")
{
    tc9.pass = "pass";
}

if(tc10.message==="Valid Brain")
{
    tc10.pass = "pass";
}

if(tc11.message==="World map Validated")
{
    tc11.pass = "pass";
}

if(tc12.message==="World map Validated")
{
    tc12.pass = "pass";
}


var allTestCases = [tc1, tc2, tc3, tc4, tc5, tc6, tc7, tc8, tc9, tc10, tc11, tc12];



                for (rows = 1; rows <= allTestCases.length ; rows++) {
                    
                    
                        
                        document.write(" <tr><td>Test Case " + rows +"</td><td class="+ allTestCases[rows-1].pass +">" + allTestCases[rows-1].pass.toUpperCase() + "</td><td>" + allTestCases[rows-1].message + "</td></tr> ")
                        
                    
                    
                }
                





