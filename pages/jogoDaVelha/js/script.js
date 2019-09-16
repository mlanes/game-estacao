let elementsTable = document.querySelectorAll('td');
let buttonTypePlayers = document.querySelectorAll('button');
let letter = "";

function playerX(event) {
  let target = event.target;
  let clickElement = event.srcElement.innerHTML;

  if (clickElement == "X" || clickElement == "O"){
    alert("Opa, este quadrado já foi escolhido!");
  }else{
     target.innerHTML = letter;
     if (letter == "X"){
         letter = "O";
     }else{
         letter = "X";
     }
  }
}
for(elementTable of elementsTable){
  elementTable.onclick = playerX; 
}

function chooseTypePlayer(event){
  console.log(event.srcElement.innerText);
  if(event.srcElement.innerText == 'Jogador "X"'){
    letter = 'X';
  }else{
    letter = 'O';
  }
};
for(buttonTypePlayer of buttonTypePlayers){
  buttonTypePlayer.onclick = chooseTypePlayer;
}