let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let previousDifference = null;

function checkGuess() {
    const input = document.getElementById("guessInput");
    const guess = Number(input.value);
    const message = document.getElementById("message");
    const attemptsText = document.getElementById("attempts");

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "⚠️ Enter a number between 1 and 100!";
        return;
    }

    attempts++;
    attemptsText.textContent = "Attempts: " + attempts;

    if (guess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed it!";
        return;
    }

    let difference = Math.abs(randomNumber - guess);

    if (previousDifference === null) {
        message.textContent = guess > randomNumber ? "📉 Too high!" : "📈 Too low!";
    } else {
       if (difference < previousDifference) {
    message.textContent = "🔥 Warmer!";
    message.style.color = "#22c55e";
} else {
    message.textContent = "❄️ Colder!";
    message.style.color = "#3b82f6";
}
    }

    previousDifference = difference;
    input.value = "";
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    previousDifference = null;

    document.getElementById("message").textContent = "Start guessing...";
    document.getElementById("attempts").textContent = "Attempts: 0";
    document.getElementById("guessInput").value = "";
}
