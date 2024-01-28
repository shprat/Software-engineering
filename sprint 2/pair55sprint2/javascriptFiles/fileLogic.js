// Declare and export a variable named "wordlMapFileT"
let wordlMapFileT;


// Select the file input element and textarea element from the HTML document
let fileInputElement1 = document.getElementById("inputGroupFile02");
let fileInputElement2 = document.getElementById("inputGroupFile03");
let fileInputElement3 = document.getElementById("inputGroupFile04");


// Declare several other variables 
let numIterations, logsEnabled, wordlMapFile, bug1File, bug2File;

let redbug1F, blackbug2F, redbug1FT, blackbug2FT;
let resultFiles = [];


// If the file input element exists
if (fileInputElement1) {
  // Add an event listener to detect changes in the selected file
  fileInputElement1.addEventListener("change", function(event) {
    event.preventDefault();

    
    
    
    wordlMapFile = document.getElementById("inputGroupFile02").files[0];
    

    

    // Use the FileReader API to read the contents of the selected file
    var reader = new FileReader();
    reader.onload = function(e) {
      // Get the file content
      var bin = e.target.result;
      // Store the file content in the "wordlMapFileT" variable
      wordlMapFileT = bin;
      resultFiles.push(wordlMapFileT);
      // Split the file content into an array of lines
      const lines = bin.split(/\r\n|\n/);
    };
    reader.readAsText(wordlMapFile);
  
  
    
    


  });
}


// If the file input element exists
if (fileInputElement2) {
  // Add an event listener to detect changes in the selected file
  fileInputElement2.addEventListener("change", function(event) {
    event.preventDefault();

    
    
    redbug1F = document.getElementById("inputGroupFile03").files[0];
    

  

    
   // Use the FileReader API to read the contents of the selected file
   var reader = new FileReader();
   reader.onload = function(e) {
     // Get the file content
     var bin = e.target.result;
     // Store the file content in the "redbug1FT" variable
     redbug1FT = bin;
     resultFiles.push(redbug1FT);
     // Split the file content into an array of lines
     const lines = bin.split(/\r\n|\n/);
   };
   reader.readAsText(redbug1F);
    


  });
}


// If the file input element exists
if (fileInputElement3) {
  // Add an event listener to detect changes in the selected file
  fileInputElement3.addEventListener("change", function(event) {
    event.preventDefault();

    
    blackbug2F = document.getElementById("inputGroupFile04").files[0];

   

   // Use the FileReader API to read the contents of the selected file
   var reader = new FileReader();
   reader.onload = function(e) {
     // Get the file content
     var bin = e.target.result;
     // Store the file content in the "blackbug2FT" variable
     blackbug2FT = bin;
     resultFiles.push(blackbug2FT);
     // Split the file content into an array of lines
     const lines = bin.split(/\r\n|\n/);
   };
   reader.readAsText(blackbug2F);
    


  });
}





  // Add an event listener to detect form submission
  document.getElementById("firstForm").addEventListener("submit", function(event) {
    event.preventDefault();

    numIterations = document.getElementById("iterations").value;
    logsEnabled = document.getElementById("flexSwitchCheckDefault").checked;

    // Redirect to a new HTML page to display the simulation
    document.write("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Simulation</title><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD' crossorigin='anonymous'></head><body><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js' integrity='sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN' crossorigin='anonymous'></script><div class='container'><div class='row'><div class='col-sm'><canvas id='canvas' width='600' height='600'></canvas></div><div class='col-sm'><div class='group-vertical m-2'><p id= 'iter'>Iterations: </p><p id='amtundfood'>Amount of undetected food: </p><p id='rbugremain'>Red bugs remaining: </p><p id='rbugskill'>Red bugs killed: </p><p id='foodred'>Food brough home for red bugs: </p><p id='bbugremain'>Black bugs remaining: </p><p id='bbugskill'>Black bugs killed: </p><p id='foodblack'>Food brough home for black bugs: </p></div></div></div></div><span class='border'><div class='d-grid gap-2 m-5 col-6 mx-auto container' id='logs'><center>Logs will be here</center></div></span><div class='d-grid gap-2 m-5 col-6 mx-auto container'><a class='btn btn-primary' href='index.html' role='button'>Quit!</a></div><script src = 'javascriptFiles/Sprite.js'></script><script src = 'javascriptFiles/instructionParser.js'></script><script src = 'javascriptFiles/classes/Cell.js'></script><script src = 'javascriptFiles/classes/World.js'></script><script src = 'javascriptFiles/classes/Bug.js'></script><script src = 'javascriptFiles/brainValidator.js'></script><script src = 'javascriptFiles/worldValidator.js'></script><script src='javascriptFiles/gui.js'></script></body></html>");
  });

