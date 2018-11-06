function rPS(){
	var compOptions = ["rock", "paper", "scissors"];
	var compChoice = compOptions[Math.floor(Math.random()*compOptions.length)];
	return compChoice;
}
var yoScore = 0;
function win(){
	yoScore++;
	$('#yourScore').text(yoScore);
}

var coScore = 0;
function lose(){
	coScore++;
	$('#compScore').text(coScore);
}

function reset(){
	yoScore = 0;
	$('#yourScore').text(yoScore);
	coScore = 0;
	$('#compScore').text(coScore);
	$('#result').text("Let's play again!");
}

$('#rock').click(function(){
	var compChoice = rPS();
	if (compChoice == "rock") {
		$('#result').text("It was a tie!");
	} else if (compChoice == "paper") {
		$('#result').text("The computer's paper beats your rock!");
		lose();
	} else {
		$('#result').text("Your rock beats the computer's scissors!");
		win();
	}
})

$('#paper').click(function(){
	var compChoice = rPS();
	if (compChoice == "paper") {
		$('#result').text("It was a tie!");
	} else if (compChoice == "scissors") {
		$('#result').text("The computer's scissors beats your paper!");
		lose();
	} else {
		$('#result').text("Your paper beats the computer's rock!");
		win();
	}
})

$('#scissors').click(function(){
	var compChoice = rPS();
	if (compChoice == "scissors") {
		$('#result').text("It was a tie!");
	} else if (compChoice == "rock") {
		$('#result').text("The computer's rock beats your scissors!");
		lose();
	} else {
		$('#result').text("Your scissors beats the computer's paper!");
		win();
	}
})

$('#reset').click(function(){
	reset();
})

$('#name').click(function(){
	var newName = prompt("What is your name?");
	if (newName != null) {
	$(this).text(newName);
	}
})