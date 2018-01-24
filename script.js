function tryAgain() {
	tries = 3
	random = Math.ceil(Math.random() * 99)
	document.getElementById("tryAgainButton").style.visibility = 'hidden'
	document.getElementById("guessNumber").innerHTML = null
}

var tries = 3
var random = Math.ceil(Math.random() * 99)
function guessNumber() {

	var num = document.getElementById("guessedNumberInput").value;
	var correct = false
	var guessNumberMessage;

	if (correct == false && tries == 0) {
		document.getElementById("guessNumber").innerHTML = "Game over. The number is " + random
		document.getElementById("guessNumber").style.color = 'red'
		document.getElementById("tryAgainButton").style.visibility = 'visible'
	}
	else {

		if (num == random) {
			guessNumberMessage = "Congrats!"
			correct = true
		}
		else if (num < random) {
			guessNumberMessage = "Your guess is too low!"
			tries -= 1
		}
		else if (num > random) {
			guessNumberMessage = "Your guess is too high!"
			tries -= 1
		}
		else {
			guessNumberMessage = num + " is not a valid number!"
		}

	if (correct == false && tries > 0) {
		document.getElementById("guessNumber").innerHTML = guessNumberMessage + " " + "You have " + tries + "tries left."
		document.getElementById("guessNumber").style.color = 'red'
	}
	else if (correct == true) {
		document.getElementById("guessNumber").innerHTML = guessNumberMessage
		document.getElementById("guessNumber").style.color = 'green'
	}
	}
}