// Generate a random number between 1 and 6
// const randomNumber = Math.floor(Math.random() * 6) + 1;

// // Select the first dice image element
// const randomImage1 = document.querySelector(".dice .img1");

// // If the element exists, change its source to the corresponding dice image
// if (randomImage1) {
//   randomImage1.setAttribute('src', `/images/dice${randomNumber}.png`);
// } else {
//   console.error("Could not find dice image element");
// }



// approach two 
/* 

// let randomDice = "dice" +[randomNumber] +" .png" ;
// let randomImage = "/images/" + randomDice;
// console.log(randomImage);

*/
function rollDice() {
var randomNumber1 = Math.floor(Math.random()*6 +1);
var randomNumber2 = Math.floor(Math.random()*6 +1);

let randomImage1 = document.querySelector(".dice .img1");
randomImage1.setAttribute('src', `/images/dice${randomNumber1}.png`);
console.log(`Image source set to ${randomImage1.src}`);



let randomImage2 = document.querySelector(".dice .img2");
randomImage2.setAttribute('src' , `/images/dice${randomNumber2}.png`)



// let randomDice = "dice" +[randomNumber] +" .png" ;
// let randomImage = "/images/" + randomDice;
// console.log(randomImage);

if (randomNumber1 >randomNumber2) {
document.querySelector(".container h1").innerHTML="Hardik Wins";
document.querySelector("#p1 p").classList.add("winner");
}
else if (randomNumber1 <randomNumber2) {
  document.querySelector("#p2 p").classList.add("winner");

}
else if (randomNumber1 == randomNumber2) {
document.querySelector(".container h1").innerHTML="Draw ";
}
}

var rollDiceButton =document.querySelector('#rollButton');
rollDiceButton.addEventListener('click', rollDice);

 