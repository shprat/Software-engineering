import { World } from "../../bugWorld/world.js";
import { assemble } from "../../bugWorld/asmParser.js";

async function submitSettings() {
  const blackAssemblerFile = document.getElementById("blackAssembler").files[0];
  const redAssemblerFile = document.getElementById("redAssembler").files[0];
  const worldFile = document.getElementById('worldMap').files[0];

  const blackAsm = await blackAssemblerFile.text();
  const redAsm = await redAssemblerFile.text();
  const board = (await worldFile.text()).replace(RegExp("\s"), '').split('\n');
  try {
    let world = new World(board, board[0], board[1]);
    window.sessionStorage.setItem("world", world.toString());// to use in another scripts

    let assembledCode = assemble(blackAsm);

    for (let i = 0; i < assembledCode.length; ++i) {
      console.log(assembledCode[i]);
    }

    assembledCode = assemble(redAsm);

    for (let i = 0; i < assembledCode.length; ++i) {
      console.log(assembledCode[i]);
    }

    window.sessionStorage.setItem("black", blackAsm);
    window.sessionStorage.setItem("red", redAsm);
  } catch (error) {
    document.getElementById("error").textContent = error;
    return;
  }

  window.location.href = '../GameField/game-field.html';
}

if (document.getElementById('SubmitSettings') != null) {
  document.getElementById('SubmitSettings').onclick = submitSettings;
}