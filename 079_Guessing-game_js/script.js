const card = document.querySelector(`.card`);
const form = document.querySelector(`form`);
const guessNumber = form.querySelector(`#guessing`);
const button = form.querySelector(`.btn`);
const wonLostMessage = card.querySelector(`.message`);

const wonNumber = 0;
const lostNumber = 0;
const attempts = 0;
const totalAttempts = 5;

form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    gameMessage(guessNumber.value);

    guessNumber.value = '';
});

const gameMessage = (guessNumber) => {
    const randomNumber = getRandomNumber(5);

    if (guessNumber == randomNumber) {
        wonLostMessage.innerHTML = `Congratulation, You have won`;
        wonNumber++;
    } else {
        wonLostMessage.innerHTML = `You have lost, the Random number was ${randomNumber}`;
        lostNumber++;
    }
};

const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit) + 1;
};
