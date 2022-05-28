function onClick() {
    const firstNumber = Math.floor(Math.random() * 6) + 1;

    const firstSrc = 'dice' + firstNumber + '.png'

    const firstDice = document.querySelectorAll('img')[0].setAttribute('src', 'images/' + firstSrc)


    const secondNumber = Math.floor(Math.random() * 6) + 1;

    const secondSrc = 'dice' + secondNumber + '.png'

    const secondDice = document.querySelectorAll('img')[1].setAttribute('src', 'images/' + secondSrc)


    const winnerMsg = document.querySelector('h1')


    if (firstNumber > secondNumber) {
        winnerMsg.textContent = 'Player1 Wins!'
    } else if (secondNumber > firstNumber) {
        winnerMsg.textContent = 'Player2 Wins!'
    } else if (secondNumber == firstNumber) {
        winnerMsg.textContent = 'Draw!!'
    }
}
