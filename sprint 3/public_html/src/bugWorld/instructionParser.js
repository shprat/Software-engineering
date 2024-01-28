
// Define regular expressions for parsing
const regexNumber = /[0-9]+/;
const regexWs = /[ \t\n\r]+/;
const regexId = /[A-Za-z]+/;
const regexComment = /;[^\n\r]*/;
const regexMisc = /:/;
const regexNl = /\n\r?/;

// Function to parse the bug code and generate instructions
function parseBugCode(bugCode) {
  const newBugCode = bugCode.replace(/;/g, " ;");
  bugCode = newBugCode;
  const instructions = [];
  const lines = bugCode.split(regexNl);
  let instructionNumber = 0;

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Skip empty lines or comments
    if (trimmedLine === '' || trimmedLine.startsWith(';')) {
      continue;
    }

    // Extract instruction parts
    const parts = trimmedLine.split(regexWs);
    const instruction = {
      instruction: parts[0],
      args: [],
      comment: null,
      label: null
    };

    // Extract arguments and comments
    for (let i = 1; i < parts.length; i++) {
      if (regexNumber.test(parts[i])) {
        instruction.args.push(parseInt(parts[i]));
      } else if (regexId.test(parts[i])) {
        instruction.args.push(parts[i]);
      } else if (parts[i].startsWith(';')) {
        instruction.comment = parts[i].substring(1).trim();
        break;
      } else if (regexMisc.test(parts[i])) {
        instruction.label = parts[i + 1];
        break;
      }
    }

    // Add instruction to instructions list
    instruction.number = instructionNumber++;
    instructions.push(instruction);
  }

  return instructions;
}


