// Declare and export a variable named "wordlMapFileT"
let wordlMapFileT;
exports = {wordlMapFileT};

// Select the file input element and textarea element from the HTML document
let fileInputElement = document.getElementById("inputGroupFile02");
let textarea = document.querySelector('textarea');

// Declare several other variables but do not assign them any value
let numIterations, logsEnabled, wordlMapFile, bug1File, bug2File;
let files;

// If the file input element exists
if (fileInputElement) {
  // Add an event listener to detect changes in the selected file
  fileInputElement.addEventListener("change", function(event) {
    event.preventDefault();

    // Get the values of several HTML elements
    const iterN = document.getElementById("iterations").value;
    const logsEnabl = document.getElementById("flexSwitchCheckDefault").checked;
    wordlMapFile = document.getElementById("inputGroupFile02").files[0];
    const bug1F = document.getElementById("inputGroupFile03").files[0];
    const bug2F = document.getElementById("inputGroupFile04").files[0];

    // Use the FileReader API to read the contents of the selected file
    var reader = new FileReader();
    reader.onload = function(e) {
      // Get the file content
      var bin = e.target.result;
      // Store the file content in the "wordlMapFileT" variable
      wordlMapFileT = bin;
      // Split the file content into an array of lines
      const lines = bin.split(/\r\n|\n/);
    };
    reader.readAsText(wordlMapFile);
  });

  // Add an event listener to detect form submission
  document.getElementById("firstForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Redirect to a new HTML page to display the simulation
    document.write("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Simulation</title><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD' crossorigin='anonymous'></head><body><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js' integrity='sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN' crossorigin='anonymous'></script><canvas id='canvas' width='600' height='600'></canvas><div class='d-grid gap-2 col-6 mx-auto container'><a class='btn btn-primary' href='index.html' role='button'>Quit!</a></div><script src = 'javascriptFiles/Sprite.js'></script><script src = 'javascriptFiles/classes/Cell.js'></script><script src = 'javascriptFiles/classes/World.js'></script><script src = 'javascriptFiles/classes/Bug.js'></script><script src='javascriptFiles/gui.js'></script></body></html>");
  });
}
