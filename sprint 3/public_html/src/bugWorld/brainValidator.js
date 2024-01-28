function validateBrain(bugCode)
{
  const newBugCode = bugCode.replace(/;/g, " ;");
  bugCode = newBugCode;
    
// Define regular expressions for parsing
const regexNumberT = /[0-9]+/;
const regexWsT = /[ \t\n\r]+/;
const regexIdT = /[A-Za-z]+/;
const regexCommentT = /;[^\n\r]*/;
const regexMiscT = /:/;
const regexNlT = /\n\r?/;

const validTokens = ["sense", "flip", "direction", "move", "turn", "mark", "unmark", "pickup", "drop", "ahead", "here", "left", "right", "leftahead", "rightahead", "foe", "friend", "food", "friendwithfood", "foewithfood", "home"];

// Function to parse the bug code and generate instructionsT

  const instructionsT = [];
  const linesT = bugCode.split(regexNlT);
  let instructionNumberT = 0;

  for (const lineT of linesT) {
    const trimmedLineT = lineT.trim();

    // Skip empty linesT or comments
    if (trimmedLineT === '' || trimmedLineT.startsWith(';')) {
      continue;
    }

    // Extract instruction partsT
    const partsT = trimmedLineT.split(regexWsT);
    const instructionT = {
      instruction: partsT[0],
      args: [],
      comment: null,
      label: null
    };

    // Extract arguments and comments
    for (let i = 1; i < partsT.length; i++) {
      if (regexNumberT.test(partsT[i])) {
        instructionT.args.push(parseInt(partsT[i]));
        if(parseInt(partsT[i])<0 || parseInt(partsT[i])>=linesT.length)
        return "Link to a non existent line";
      } else if (regexIdT.test(partsT[i])) {

        let isValid = false;

        for(let j=0; j<validTokens.length; j++)
        {
          if(partsT[i].toLowerCase()==validTokens[j])
          {
            isValid = true;
            break;
          }
        }
        if(!isValid)
        {
          return "Invalid token";
        }
        instructionT.args.push(partsT[i]);
      } else if (partsT[i].startsWith(';')) {
        instructionT.comment = partsT[i].substring(1).trim();
        break;
      } else if (regexMiscT.test(partsT[i])) {
        instructionT.label = partsT[i + 1];
        break;
      }
    }

    // Add instruction to instructionsT list
    instructionT.number = instructionNumberT++;
    instructionsT.push(instructionT);
  }

  for(let ind = 0; ind < instructionsT.length; ind++)
  {
    if(instructionsT[ind].instruction.toLowerCase()!="sense" && instructionsT[ind].instruction.toLowerCase()!="flip" && instructionsT[ind].instruction.toLowerCase()!="direction" && instructionsT[ind].instruction.toLowerCase()!="move" && instructionsT[ind].instruction.toLowerCase()!="turn" && instructionsT[ind].instruction.toLowerCase()!="mark" && instructionsT[ind].instruction.toLowerCase()!="unmark" && instructionsT[ind].instruction.toLowerCase()!="pickup" && instructionsT[ind].instruction.toLowerCase()!="drop")
    {
        return "Invalid Token";
    }


  if((instructionsT[ind].instruction.toLowerCase()==="sense" && instructionsT[ind].args.length!=4) || (instructionsT[ind].instruction.toLowerCase()==="flip"&&(instructionsT[ind].args.length!=3&&instructionsT[ind].args.length!=4)) || (instructionsT[ind].instruction.toLowerCase()==="direction"&&instructionsT[ind].args.length!=3) || (instructionsT[ind].instruction.toLowerCase()==="move" && instructionsT[ind].args.length !=2) || (instructionsT[ind].instruction.toLowerCase()==="turn"&&instructionsT[ind].args.length!=2) || (instructionsT[ind].instruction.toLowerCase()==="mark"&&instructionsT[ind].args.length!=2) || (instructionsT[ind].instruction.toLowerCase()==="unmark"&&instructionsT[ind].args.length!=2) || (instructionsT[ind].instruction.toLowerCase()==="pickup"&&instructionsT[ind].args.length!=2) || (instructionsT[ind].instruction.toLowerCase()==="drop"&&instructionsT[ind].args.length!=1))
    {
        return "Incorrect Use of command";
    }

  

  

  
}

  return "Valid Brain";



}