var squares = document.querySelectorAll("td");
var a=document.querySelector("a");
var button_1=document.querySelector("#button_1");
var button_2=document.querySelector("#button_2");
var get=document.getElementById("result")

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }
  get.innerText="Result:"

}

button_1.addEventListener('click',clearBoard);

function changeMarker(){
        if(this.textContent === ''){
          this.textContent = 'X';

        }else if (this.textContent === 'X') {
          this.textContent = 'O';
        }else {
          this.textContent = '';
        }
    }

    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', changeMarker);
    }


function last(){
if(squares[0].textContent==='X' && squares[4].textContent==='X'&& squares[8].textContent==='X'){

console.log("WIN");
get.innerText="Player 1 Wins"

}else if (squares[2].textContent==='X' && squares[4].textContent==='X'&& squares[6].textContent==='X') {
  console.log("WIN");
  get.innerText="Player 1 Wins"
}else if (squares[1].textContent==='X' && squares[4].textContent==='X'&& squares[7].textContent==='X') {
  console.log("WIN");
get.innerText="Player 1 Wins"
}else if (squares[3].textContent==='X' && squares[4].textContent==='X'&& squares[5].textContent==='X') {
    console.log("WIN");
  get.innerText="Player 1 Wins"
}else if (squares[3].textContent==='X' && squares[0].textContent==='X'&& squares[6].textContent==='X') {
  console.log("WIN");
  get.innerText="Player 1 Wins"
}else if (squares[2].textContent==='X' && squares[5].textContent==='X'&& squares[8].textContent==='X') {
    console.log("WIN");
  get.innerText="Player 1 Wins"
}else if (squares[2].textContent==='X' && squares[0].textContent==='X'&& squares[1].textContent==='X') {
  console.log("WIN");
  get.innerText="Player 1 Wins"
}else if (squares[6].textContent==='X' && squares[7].textContent==='X'&& squares[8].textContent==='X') {
    console.log("WIN");
  get.innerText="Player 1 Wins"
}else if (squares[2].textContent==='O' && squares[4].textContent==='O'&& squares[6].textContent==='O') {
  console.log("WIN");
get.innerText="Player 2 Wins"
}else if (squares[1].textContent==='O' && squares[4].textContent==='O'&& squares[7].textContent==='O') {
  console.log("WIN");
    get.innerText="Player 2 Wins"
}else if (squares[3].textContent==='O' && squares[4].textContent==='O'&& squares[5].textContent==='O') {
    console.log("WIN");
      get.innerText="Player 2 Wins"
}else if (squares[3].textContent==='O' && squares[0].textContent==='O'&& squares[6].textContent==='O') {
  console.log("WIN");
    get.innerText="Player 2 Wins"
}else if (squares[2].textContent==='O' && squares[5].textContent==='O'&& squares[8].textContent==='O') {
    console.log("WIN");
      get.innerText="Player 2 Wins"
}else if (squares[2].textContent==='O' && squares[0].textContent==='O'&& squares[1].textContent==='O') {
  console.log("WIN");
    get.innerText="Player 2 Wins"
}else if (squares[6].textContent==='O' && squares[7].textContent==='O'&& squares[8].textContent==='O') {
    console.log("WIN");
    get.innerText="Player 2 Wins"
}else if (squares[0].textContent==='O' && squares[4].textContent==='O'&& squares[8].textContent==='O') {
    console.log("WIN");
    get.innerText="Player 2 Wins"
}else{
  console.log("DRAW");
    get.innerText="DRAW"
}

}

button_2.addEventListener('click',last);
