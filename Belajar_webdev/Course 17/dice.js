var diceNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImages1 = "dice"+diceNumber1+".png"

var diceNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImages2 = "dice"+diceNumber2+".png"

document.querySelector(".img1").setAttribute("src", "./images/"+diceImages1);
document.querySelector(".img2").setAttribute("src", "./images/"+diceImages2);

if(diceImages1 > diceImages2){
    document.querySelector("h1").textContent = "Player 1 Wins";
} 
else if(diceImages1 < diceImages2){
    document.querySelector("h1").textContent = "Player 2 Wins";
}else{
    document.querySelector("h1").textContent = "Draw";
}