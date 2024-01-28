// Set the scaling factor for the canvas
let scalingFactor = 60;

// Get the canvas and its context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas height and width
canvas.height = 1024;
canvas.width = 576;

// Log the map file data
console.log(wordlMapFileT);

// Parse the map data and extract relevant information
let mapString = wordlMapFileT;
const map = mapString.trim().split('\n').map(line => line.trim().split(' '));
let cwidth = parseInt(map[0][0]);
let cheight = parseInt(map[1][0]);

// Set the canvas height and width based on the dimensions in the map file
canvas.width = cwidth * scalingFactor;
canvas.height = cwidth * scalingFactor;

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
  listOfCells.push(cell);
} 
else if (map[y + 2][x] === '.') {
  let cell = new Cell(x*scalingFactor,y*scalingFactor,null,"");
  listOfCells.push(cell);
} 
else if (map[y + 2][x] === '-') {
  let cell = new Cell(x*scalingFactor,y*scalingFactor,null,"./images/60/black.png");
  listOfCells.push(cell);
} 
else if (map[y + 2][x] === '+') {
  let cell = new Cell(x*scalingFactor,y*scalingFactor,null,"./images/60/red.png");
  listOfCells.push(cell);
} 
else if(map[y + 2][x] >= '0' && map[y + 2][x] <= '9')
{
  let cell = new Cell(x*scalingFactor,y*scalingFactor,null,"./images/60/food.png");
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
let world = new World(listOfCells);

// Create an array to hold the bugs
let bugArray = [];

// Create 10 bugs with random positions, directions, and colors
for(let i=0;i<10;++i)
{
  let xpos = Math.floor(Math.random() * (cwidth*scalingFactor));
  let ypos = Math.floor(Math.random() * (cheight*scalingFactor));

  let dirc = Math.floor(Math.random() * 6);

  let colorr = Math.floor(Math.random() * 2) + 1;

  let animationss = "";
  let imgSr = "";

  if(colorr===1)
  {
  animationss = {dir0:{imageSrc: "./images/red0.jpg"}, dir1:{imageSrc: "./images/red1.png"}, dir2:{imageSrc: "./images/red2.png"}, dir3:{imageSrc: "./images/red3.png"}, dir4:{imageSrc: "./images/red4.png"},dir5:{imageSrc: "./images/red5.png"} };
  imgSr = "./images/red0.jpg";
  }

  else
  {
  animationss = {dir0:{imageSrc: "./images/black0.png"}, dir1:{imageSrc: "./images/black1.png"}, dir2:{imageSrc: "./images/black2.png"}, dir3:{imageSrc: "./images/black3.png"}, dir4:{imageSrc: "./images/black4.png"},dir5:{imageSrc: "./images/black5.png"} };
  imgSr = "./images/black0.png";
  }



  const bug = new Bug(i,colorr,1,1,dirc,xpos,ypos,{imageSrc: imgSr, animations: animationss, cells:listOfCells});

  bugArray.push(bug);





}

//Create the background Sprite
const backgroundSprite = new Sprite({position: {x: 0, y: 0}, imageSrc: "./images/preview.jpg"});


 
//function to animate the bugs and render the sprites
function animate()
    {
        window.requestAnimationFrame(animate);


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
            bugArray[i].update();
            
        }

        
       






       


       

        
    }

animate();




        