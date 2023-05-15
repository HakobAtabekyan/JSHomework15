let score1 = 0;
let score2 = 0;
let round = 0;
let nextbtn = document.querySelector(".next");
let btn1 = document.querySelector(".player1 button");
let btn2 = document.querySelector(".player2 button");
btn2.disabled = true;
btn2.style.cursor ="not-allowed"
btn1.style.cursor ="not-allowed"
btn1.disabled = true;
let number1 = 0;
let number2 = 0;
let point1 = document.querySelector(".player1 h1");
let point2 = document.querySelector(".player2 h1");
let scores = document.querySelector(".score");
let roundtext = document.querySelector(".round");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
nextbtn.addEventListener("click",()=>{
        round++;   
        roundtext.innerHTML = `ROUND ${round}`
        btn1.style.cursor ="pointer"
        btn1.disabled = false;
        nextbtn.disabled = true;
        nextbtn.innerHTML = `NEXT ROUND ${round+1}`
        nextbtn.style.cursor ="not-allowed"
        number1 = 0;
        number2 = 0;
        point1.innerHTML = number1;
        point2.innerHTML = number2;
        point1.style.color = "blue" ;
        point2.style.color = "red" ;
        scores.innerHTML = `${score1} : ${score2}  `

})

btn1.addEventListener("click",()=>{
    number1 = Math.floor(Math.random() * 10)+1;     
    btn2.style.cursor ="pointer"
    btn2.disabled = false;
    btn1.disabled = true; 
    btn1.style.cursor ="not-allowed";
    point1.innerHTML = number1;
})

btn2.addEventListener("click",()=>{
    number2 = Math.floor(Math.random() * 10)+1;     
    nextbtn.style.cursor ="pointer"
    nextbtn.disabled = false;
    btn2.disabled = true; 
    btn2.style.cursor ="not-allowed";
    point2.innerHTML = number2;

    if (number1>number2) {
        point1.style.color = "green" 
        score1++;

    } else if (number1<number2){
        point2.style.color = "green" 
        score2++
    }

    scores.innerHTML = `${score1} : ${score2}  `

    if (score1== 5 ) {          
        point1.innerHTML = "WIN";          
        endgame();
       

    } else if (score2== 5 ){       
        point2.innerHTML = "WIN";  

        endgame();
    }



})

function endgame(){
    nextbtn.innerHTML = `START NEW GAME`
    roundtext.innerHTML = `GAME OVER`
     score1 = 0;
     score2 = 0;
     round = 0;

}