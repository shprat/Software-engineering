

function validateMap(mapStringT)
{

    let redHomes = 0;
    let blackHomes = 0;


// Parse the mapT data and extract relevant information

const mapT = mapStringT.trim().split('\n').map(line => line.trim().split(' '));

let cwidthT = parseInt(mapT[0][0]);
let cheightT = parseInt(mapT[1][0]);



// Create an array to hold the list of cells
let listOfCellsT = [];

// Create a 2D array to hold the cells
let fcells = new Array(cwidthT);
for (let x = 0; x < cwidthT; x++) {
fcells[x] = new Array(cheightT);

for (let y = 0; y < cheightT; y++)
{// Check for borders and dimensions
if(x===0||y===0 || x === cwidthT - 1 || y === cheightT - 1 )
{
if (mapT[y + 2][x] != '#')
{
return "Borders not closed.";

}
}
if(typeof mapT[cheightT+1] === 'undefined' || typeof mapT[cheightT+1][cwidthT-1] === 'undefined' || typeof mapT[cheightT+2] != 'undefined' || typeof mapT[cheightT+1][cwidthT] != 'undefined')
{
return "Wrong Dimensions.";

}      




        // Create cells based on the characters in the mapT data
if (mapT[y + 2][x] === '#')
{
 
  
} 
else if (mapT[y + 2][x] === '.') {
  
} 
else if (mapT[y + 2][x] === '-') {
  ++blackHomes;

  
  
} 
else if (mapT[y + 2][x] === '+') {
  ++redHomes;
  
} 
else if(mapT[y + 2][x] >= '0' && mapT[y + 2][x] <= '9')
{
  
}
else
{
  return "Invalid character in the map";
  
}
/*
// Check for borders and dimensions
if(x===0||y===0 || x === cwidthT - 1 || y === cheightT - 1 )
{
if (mapT[y + 2][x] != '#')
{
return "Borders not closed.";

}
}
if(typeof mapT[cheightT+1] === 'undefined' || typeof mapT[cheightT+1][cwidthT-1] === 'undefined' || typeof mapT[cheightT+2] != 'undefined' || typeof mapT[cheightT+1][cwidthT] != 'undefined')
{
return "Wrong Dimensions.";

}      




        // Create cells based on the characters in the mapT data
if (mapT[y + 2][x] === '#')
{
 
  
} 
else if (mapT[y + 2][x] === '.') {
  
} 
else if (mapT[y + 2][x] === '-') {

  ++blackHomes;

  if(y>0 && y<cheightT-1 && x>0 && x<cwidthT-1)
  {
    if(!(mapT[y+1][x]==='-'||mapT[y+3][x]==='-'))
    {
      if(!(mapT[y+2][x-1]==='-'||mapT[y+2][x+1]==='-'))
      {
        return "Swarms Not Linked";
      }
      
    }
  }

  
  
} 
else if (mapT[y + 2][x] === '+') {
  ++redHomes;

  if(y>0 && y<cheightT-1 && x>0 && x<cwidthT-1)
  {
    if(!(mapT[y+1][x]==='-=+'||mapT[y+3][x]==='+'))
    {
      if(!(mapT[y+2][x-1]==='+'||mapT[y+2][x+1]==='+'))
      {
        return "Swarms Not Linked";
      }
      
    }
  }
  
} 
else if(mapT[y + 2][x] >= '0' && mapT[y + 2][x] <= '9')
{
  
}
else
{
  return "Invalid character in the mapT";
  
}
*/
}

}
if(redHomes===0 || blackHomes===0)
return "One of the nests missing";

else
return "World map Validated";
}