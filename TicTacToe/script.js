console.log("Welcome to Tic Tac Toe")
let music = new Audio("mixkit-casino-win-reward-1982.wav")
let audioTurn = new Audio("mixkit-cowbell-sharp-hit-1743.wav")
let gameover = new Audio("mixkit-funny-fail-low-tone-2876.wav")
let turn = "X"
let isgameover = false;
// function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}
//function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -10, 10, 0],
        [3, 4, 5, -10, 30, 0],
        [6, 7, 8, -10, 50, 0],
        [0, 4, 8, -10, 30, 45],
        [2, 4, 6, -10, 30, 315],
        [2, 5, 8, 10, 25, 90],
        [0, 3, 6, -30, 25, 90],
        [1, 4, 7, -10, 25, 90],
     ]
     wins.forEach(e =>{
         if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText =  boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "30vw";
                }

     })
}
// game logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})
//Add onclick listener to reset button
reset.addEventListener('click', ()=>{
   let boxtexts = document.querySelectorAll('.boxtext');
   Array.from(boxtexts).forEach(element => {
       element.innerText = ""
   });
   turn = "X";
   isgameover = false
   document.querySelector(".line").style.width = "0vw";
   document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
   document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})
