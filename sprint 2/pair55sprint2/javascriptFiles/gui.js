// Set the scaling factor for the canvas
let scalingFactor = 60;

var requestID = 0;

var totalWorldFood = 0;

var toalRedBugs = 0;
var toalBlackBugs = 0;

// Get the canvas and its context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas height and width
canvas.height = 1024;
canvas.width = 576;

// Log the map file data
console.log(resultFiles[0]);

console.log(parseBugCode(resultFiles[1]));
console.log(parseBugCode(resultFiles[2]));

console.log(numIterations);
console.log(logsEnabled);


let redBrainMsg = validateBrain(resultFiles[1]);
let blackBrainMsg = validateBrain(resultFiles[2]);
let worldMapMsg = validateMap(resultFiles[0]);


if (worldMapMsg!="World map Validated")
{
  window.alert(worldMapMsg);
  fail;
}

if(redBrainMsg!="Valid Brain")
{
  window.alert(redBrainMsg);
fail;

}

if(blackBrainMsg!="Valid Brain")
{
  window.alert(blackBrainMsg);
fail;

}






let mapString = resultFiles[0];

let instructionsRed = parseBugCode(resultFiles[1]);
let instructionsBlack = parseBugCode(resultFiles[2]);

// Parse the map data and extract relevant information

const map = mapString.trim().split('\n').map(line => line.trim().split(' '));
let cwidth = parseInt(map[0][0]);
let cheight = parseInt(map[1][0]);

// Set the canvas height and width based on the dimensions in the map file
canvas.width = cwidth * scalingFactor;
canvas.height = cheight * scalingFactor;

// Create an array to hold the list of cells
let listOfCells = [];

// Create a 2D array to hold the cells
let fcells = new Array(cwidth);
for (let x = 0; x < cwidth; x++) {
fcells[x] = new Array(cheight);

for (let y = 0; y < cheight; y++)
{
// Check for borders and dimensions
if(x===0||y===0 || x === cwidth - 1 || y === cheight - 1 )
{
if (map[y + 2][x] != '#')
{
window.alert("Borders not closed.");
fail;
}
}
if(typeof map[cheight+1] === 'undefined' || typeof map[cheight+1][cwidth-1] === 'undefined' || typeof map[cheight+2] != 'undefined' || typeof map[cheight+1][cwidth] != 'undefined')
{
window.alert("Wrong Dimensions.");
fail;
}      




        // Create cells based on the characters in the map data
if (map[y + 2][x] === '#')
{
  let cell = new Cell(x*scalingFactor,y*scalingFactor,null,"./images/60/block1.jpg");
  cell.obstructed = true;
  cell.rock = true;
  listOfCells.push(cell);
} 
else if (map[y + 2][x] === '.') {
  let cell = new Cell(x*scalingFactor,y*scalingFactor,null,"");
  listOfCells.push(cell);
} 
else if (map[y + 2][x] === '-') {
  let cell = new Cell(x*scalingFactor,y*scalingFactor,null,"./images/60/black.png");
  cell.home = new Home(2);
  listOfCells.push(cell);
} 
else if (map[y + 2][x] === '+') {
  let cell = new Cell(x*scalingFactor,y*scalingFactor,null,"./images/60/red.png");
  cell.home = new Home(1);
  listOfCells.push(cell);
} 
else if(map[y + 2][x] >= '0' && map[y + 2][x] <= '9')
{
  let cell = new Cell(x*scalingFactor,y*scalingFactor,null,"./images/60/food.png");
  cell.food = map[y + 2][x]-'0';
  totalWorldFood+=cell.food;
  listOfCells.push(cell);
}
else
{
  window.alert("Invalid character in the map");
  fail;
}

}
}

// Create a World object with the list of cells
let world1 = new World(listOfCells, scalingFactor);
world1.totalFoodOverall = totalWorldFood;

// Create an array to hold the bugs
let bugArray = [];

// Create 5 bugs with random positions, directions, and colors
for(let i=0;i<5;++i)
{
  let xpos = Math.floor(Math.random() * (cwidth*scalingFactor));
  let ypos = Math.floor(Math.random() * (cheight*scalingFactor));

  if(xpos < scalingFactor)
  xpos += scalingFactor;

  if(ypos < scalingFactor)
  ypos += scalingFactor;

  if(xpos >= cwidth*scalingFactor-scalingFactor)
  xpos -= scalingFactor;

  if(ypos >= cheight*scalingFactor-scalingFactor)
  ypos -= scalingFactor;

  let dirc = Math.floor(Math.random() * 6);

  let colorr = Math.floor(Math.random() * 2) + 1;

  let animationss = "";
  let imgSr = "";

  let instructions = "";

  if(colorr===1)
  {
  animationss = {dir0:{imageSrc: "./images/red0.jpg"}, dir1:{imageSrc: "./images/red1.png"}, dir2:{imageSrc: "./images/red2.png"}, dir3:{imageSrc: "./images/red3.png"}, dir4:{imageSrc: "./images/red4.png"},dir5:{imageSrc: "./images/red5.png"} };
  imgSr = "./images/red0.jpg";
  instructions = instructionsRed;
  toalRedBugs+=1;
  }

  else
  {
  animationss = {dir0:{imageSrc: "./images/black0.png"}, dir1:{imageSrc: "./images/black1.png"}, dir2:{imageSrc: "./images/black2.png"}, dir3:{imageSrc: "./images/black3.png"}, dir4:{imageSrc: "./images/black4.png"},dir5:{imageSrc: "./images/black5.png"} };
  imgSr = "./images/black0.png";
  instructions = instructionsBlack;
  toalBlackBugs+=1;
  }



  const bug = new Bug(i,colorr,1,1,dirc,xpos,ypos,world1,instructions, {imageSrc: imgSr, animations: animationss});

  bugArray.push(bug);





}

world1.bugs = bugArray;

//Create the background Sprite
const backgroundSprite = new Sprite({position: {x: 0, y: 0}, imageSrc: "./images/preview.jpg"});


 let iterCount = 1;
//function to animate the bugs and render the sprites
function animate()
    {
      

      
      requestID = window.requestAnimationFrame(animate);

        document.getElementById("iter").innerHTML = "Iterations: " + iterCount + "/" + numIterations;
        document.getElementById("amtundfood").innerHTML = "Amount of undetected food: " + world1.totalFoodOverall;
        document.getElementById("rbugremain").innerHTML = "Red bugs remaining: " + (toalRedBugs-world1.redBugsKilled);
        document.getElementById("rbugskill").innerHTML = "Red bugs killed: " + world1.redBugsKilled;
        document.getElementById("foodred").innerHTML = "Food brough home for red bugs: " + world1.redHomeFood;

        document.getElementById("bbugremain").innerHTML = "Black bugs remaining: " + (toalBlackBugs-world1.blackBugsKilled);
        document.getElementById("bbugskill").innerHTML = "Black bugs killed: " + world1.blackBugsKilled;
        document.getElementById("foodblack").innerHTML = "Food brough home for black bugs: " + world1.blackHomeFood;

      
      


        //draw background sprite
        backgroundSprite.draw();

        //draw other objects
        for(let i = 0; i<listOfCells.length; i++)
        {
            listOfCells[i].draw();
            
        } 


        //draw and update bugs
        for(let i = 0; i<bugArray.length; i++)
        {
            bugArray[i].draw();
            bugArray[i].run_instructions();
            
        }

        if(iterCount >= numIterations)
        {
          window.alert("Simulation Ended.");

          let finalLogs = "<center>";

          if(logsEnabled)
          {

          finalLogs+="Iterations: " + iterCount + "/" + numIterations;
          finalLogs += "<br>Amount of undetected food: " + world1.totalFoodOverall;
          finalLogs += "<br>Red bugs remaining: " + (toalRedBugs-world1.redBugsKilled);
          finalLogs += "<br>Red bugs killed: " + world1.redBugsKilled;
          finalLogs += "<br>Food brough home for red bugs: " + world1.redHomeFood;
          finalLogs += "<br>Black bugs remaining: " + (toalBlackBugs-world1.blackBugsKilled);
          finalLogs += "<br>Black bugs killed: " + world1.blackBugsKilled;
          finalLogs += "<br>Food brough home for black bugs: " + world1.blackHomeFood;
          finalLogs += "</center>";

          document.getElementById("logs").innerHTML = finalLogs;
          }



          cancelAnimationFrame(requestID);
          
          
          
        }

        ++iterCount;

      

        
       






       


       

        
    }


    requestID = requestAnimationFrame(animate);

//animate();





        