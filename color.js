const COLORS_ARRAY = [
  "blue",
  "cyan",
  "gold",
  "gray",
  "green",
  "magenta",
  "orange",
  "red",
  "white",
  "yellow",
  "beige",
  "aquamarine",
  "blueviolet",
  "darksalmon",
  "firebrick",
];
let numTries = 0;

function runGame() {
  let guess = "";
  let correct = false;
  COLORS_ARRAY.sort();
  const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
  const target = COLORS_ARRAY[targetIndex];
  console.log(target);

  do {
    guess = prompt(
      "I am thinking of one of these colors:\n\n" +
        COLORS_ARRAY.join(", ") +
        "\n\nWhat color am I thinking of?\n"
    );
    console.log(guess);
    numTries += 1;
    if (guess === null) {
      alert("You have left the game 😞");
      return;
    }
    guess = guess.toLowerCase();
    correct = checkGuess(guess, target);
  } while (!correct);
  document.body.style.background = guess;
  alert(
    "Congratulations! 😃 Your guess was right!\n\n It took you " +
      numTries +
      " tries to guess that the color was " +
      target +
      "!"
  );
}

function checkGuess(guess, target) {
  let correct = false;
  if (!COLORS_ARRAY.includes(guess)) {
    alert(
      "Sorry, your guess is not an option 😞\n\nYou have tried " +
        numTries +
        " times.... Please try again!  "
    );
  } else if (guess > target) {
    alert(
      "Your guess is alphabetically higher than mine 🤔\n\nYou have tried " +
        numTries +
        " times... Please try again!"
    );
  } else if (guess < target) {
    alert(
      "Your guess is alphabetically lower than mine 🤔\n\nYou have tried " +
        numTries +
        " times... Please try again!"
    );
  } else {
    correct = true;
  }

  return correct;
}
