//*Guess number 
//*guess a number from 1 to 5
//*genarate a random number between 1 to 5 
//*if the random number matches guessing number ;then show massage won,else lost 
//*run the game for 5 time
//*show the number of won and lost .



let youWonNumber = 0;
let youlostNumber = 0;

for (let x = 1; x <=5 ; x++) {
    
    const guessNumber = parseInt(prompt('Guess a number 1 to 5 :'));
    const randomNumber = Math.floor(Math.random()*5) + 1 ;
    
    if( randomNumber == guessNumber){
        console.log(" You have won ");
        youWonNumber++;
    }
    else {
        console.log(' You have lost ,bcz the random number was ' + randomNumber);
        youlostNumber = youlostNumber + 1;
    }

}

document.write("You won Number = " + youWonNumber + "<br>");
document.write("You lost Number = " + youlostNumber + "<br>");