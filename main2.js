let title = document.querySelector(".title");
let turn = "x";
let square = [];
let gameOver = false; 

function end(num1, num2, num3) {
  const winner=square[num1] ;
  const playerXName = document.getElementById('playerXName').value;
  const playerOName = document.getElementById('playerOName').value;
  if(winner==="X")
  {
    title.innerHTML=`${playerXName} wins`;
  }
  else if(winner==="O")
  {
    title.innerHTML=`${playerOName} wins`;
  }
  document.getElementById("item" + num1).style.background = "#000";
  document.getElementById("item" + num2).style.background = "#000";
  document.getElementById("item" + num3).style.background = "#000";
  gameOver = true;
}

function winner() {
  if (gameOver) return; 

  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById("item" + i).innerHTML;
  }
  if (square[1] == square[2] && square[2] == square[3] && square[1] != "") {
    end(1, 2, 3);
  } else if (square[4] == square[5] && square[5] == square[6] && square[6] != "") {
    end(4, 5, 6);
  } else if (square[7] == square[8] && square[8] == square[9] && square[9] != "") {
    end(7, 8, 9);
  } else if (square[1] == square[4] && square[4] == square[7] && square[1] != "") {
    end(1, 4, 7);
  } else if (square[2] == square[5] && square[5] == square[8] && square[8] != "") {
    end(2, 5, 8);
  } else if (square[3] == square[6] && square[6] == square[9] && square[9] != "") {
    end(3, 6, 9);
  } else if (square[1] == square[5] && square[5] == square[9] && square[5] != "") {
    end(1, 5, 9);
  } else if (square[3] == square[5] && square[5] == square[7] && square[5] != "") {
    end(3, 5, 7);
  } else {
    let isDraw = square.every((value) => value != "");
    if (isDraw) {
      title.innerHTML = "It's a draw!";
      gameOver = true; 
    }
  }
}

function game(id) {
  if (gameOver) return; 
  const playerXName = document.getElementById('playerXName').value;
  const playerOName = document.getElementById('playerOName').value;
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "o";
    title.innerHTML = `It's ${playerOName}'s turn (O)`;
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "x";
    title.innerHTML = `It's ${playerXName}'s turn (X)`;
  }
  winner();

}

function restartGame() {
  for (let i = 1; i < 10; i++) {
    document.getElementById("item" + i).innerHTML = "";
    document.getElementById("item" + i).style.background = "#f25";
    document.getElementById('playerXName').value="";
    document.getElementById('playerOName').value="";
  }
  title.innerHTML = "Player X turn";
  turn = "x";
  square = [];

  gameOver = false;
}
