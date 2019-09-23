let elementsTable = document.querySelectorAll('td');
let buttonTypePlayers = document.querySelectorAll('#player-type button');
let letter = '';

function playerX(event) {
  let target = event.target;
  let clickElement = event.srcElement.innerHTML;

  if (letter != '') {
    if (clickElement == 'X' || clickElement == 'O') {
      alert('Opa, este quadrado já foi escolhido!');
    } else {
      target.innerHTML = letter;
      letter === 'X' ? target.className = 'letterX' : target.className = 'letterO';

      //Aqui serve para direcionar que será o próximo a jogar
      letter = letter === 'X' ? 'O' : 'X';

      document.querySelector('#player-type h3').innerHTML = `É a vez do <span>Jogador '${letter}'</span>`;
      if (letter === 'X') {
        document.querySelector('#player-type h3 span').className = 'letterX';
      } else {
        document.querySelector('#player-type h3 span').className = 'letterO';
      }
    }
    verify(target.innerHTML);
  } else {
    alert('Selecione um jogador para começar o game :)');
  }
}
for (elementTable of elementsTable) {
  elementTable.onclick = playerX;
}

function chooseTypePlayer(event) {
  letter = event.srcElement.innerText === 'Jogador "X"' ? 'X' : 'O';
  document.querySelector('#player-type h3').innerHTML = `O <span>${event.srcElement.innerText}</span> vai começar`;

  if (letter === 'X') {
    document.querySelector('#player-type h3 span').className = 'letterX';
  } else {
    document.querySelector('#player-type h3 span').className = 'letterO';
  }
  buttonTypePlayers[0].setAttribute('disabled', 'disabled');
  buttonTypePlayers[1].setAttribute('disabled', 'disabled');
};
for (buttonTypePlayer of buttonTypePlayers) {
  buttonTypePlayer.onclick = chooseTypePlayer;
}

function verify(valueElement) {
  let item11 = document.getElementById('item11').innerHTML;
  let item12 = document.getElementById('item12').innerHTML;
  let item13 = document.getElementById('item13').innerHTML;
  let item21 = document.getElementById('item21').innerHTML;
  let item22 = document.getElementById('item22').innerHTML;
  let item23 = document.getElementById('item23').innerHTML;
  let item31 = document.getElementById('item31').innerHTML;
  let item32 = document.getElementById('item32').innerHTML;
  let item33 = document.getElementById('item33').innerHTML;

  if (
    ((item11 != '') && (item12 != '') && (item13 != '') && (item11 == item12) && (item12 == item13))
    || ((item11 != '') && (item22 != '') && (item33 != '') && (item11 == item22) && (item22 == item33))
    || ((item11 != '') && (item21 != '') && (item31 != '') && (item11 == item21) && (item21 == item31))
    || ((item21 != '') && (item22 != '') && (item23 != '') && (item21 == item22) && (item22 == item23))
    || ((item31 != '') && (item32 != '') && (item33 != '') && (item31 == item32) && (item32 == item33))
    || ((item12 != '') && (item22 != '') && (item32 != '') && (item12 == item22) && (item22 == item32))
    || ((item13 != '') && (item23 != '') && (item33 != '') && (item13 == item23) && (item23 == item33))
    || ((item31 != '') && (item22 != '') && (item13 != '') && (item31 == item22) && (item22 == item13))
  ) {
    setTimeout(() => {
      alert(`O jogador ${valueElement} ganhou, parabéns campeão!`);
      newGame();
    }, 250);
  } else if (
    ((item11 != '') && (item12 != '') && (item13 != ''))
    && ((item11 != '') && (item22 != '') && (item33 != ''))
    && ((item11 != '') && (item21 != '') && (item31 != ''))
    && ((item21 != '') && (item22 != '') && (item23 != ''))
    && ((item31 != '') && (item32 != '') && (item33 != ''))
    && ((item12 != '') && (item22 != '') && (item32 != ''))
    && ((item13 != '') && (item23 != '') && (item33 != ''))
    && ((item31 != '') && (item22 != '') && (item13 != ''))
  ) {
    setTimeout(() => {
      alert('Deu Velha!');
      newGame();
    }, 250);
  }
}

function newGame() {
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      let idElement = 'item' + i + j;
      document.getElementById(idElement).innerHTML = '';
    }
  }
  letter = '';
  buttonTypePlayers[0].removeAttribute('disabled');
  buttonTypePlayers[1].removeAttribute('disabled');
  document.querySelector('#player-type h3').innerHTML = '';
}
