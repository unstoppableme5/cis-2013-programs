//initiate varibles
var intRandom = 0; //a random number
var intCount = 1; //the number of guesses
var arrayGuessed = []; //saves the guesses
var intMinInput = 0; //max value
var intMaxInput = 0; //min value

//the function is invoked whenever a user guesses a number
function guess(){
	//get the DOM element to display messages
	var intGuess = parseInt(document.getElementById("numInput").value);
	var element = document.getElementById("instruction");
	//make the element visible
	element.hidden = false;

	//if the guess is correct alert to the user
	if(intGuess == intRandom){
		alert("You guessed the value " + intRandom + " after " + intCount + " trys. Congrats!");
		//hide the submit button and show the play again button
		document.getElementById("submit").hidden = true;
		document.getElementById("playAgain").hidden = false;
	}
	//if the number has been guessed tell the user to try again
	else if(arrayGuessed.includes(intGuess)){
		element.innerText = "You already guessed that number";
	}
	//if the guess is too big tell the user to guess lower
	else if(intGuess > intRandom){
		element.innerText = "Guess a lower number than " + intGuess;
	}
	//if the guess is too small tell the user to guess higher
	else if(intGuess < intRandom){
		element.innerText = "Guess a higher number than " + intGuess;
	}

	//push the gues into the array
	arrayGuessed.push(intGuess);
	//increment the number of trys
	intCount++;
}

//sets the random number value and starts the game
function startGame(){
	if(setMinMax()){
		//calculate the random number within the appropriate range
		intRandom = intMinInput + Math.floor(Math.random() * (intMaxInput - intMinInput + 1));
		
		//hide the start menu and display the game console
		document.getElementById("pleaseGuess").innerText = "Please guess a number between " + intMinInput+ " and " + intMaxInput;
		document.getElementById("startMenu").hidden = true;
		document.getElementById("game").hidden = false;
	}
}

//used to change the min and max value whenever the select is changed in the DOM
//returns true if the input for min and max is valid
function setMinMax(){
	var strDifficulty = document.getElementById("selectDifficulty").value;
	
	if(parseInt(document.getElementById("minInput").value) > parseInt(document.getElementById("maxInput").value)){
		alert("Your min value must be smaller than your max value");
		return false;
	}
	//select the difficulty for custom mode
	if(strDifficulty == "custom"){
		intMinInput = parseInt(document.getElementById("minInput").value);
		intMaxInput = parseInt(document.getElementById("maxInput").value);
	}
	////select the difficulty for easy mode
	if(strDifficulty == "easy"){
		intMaxInput = 10;
		intMinInput = 1;
		document.getElementById("maxInput").value = intMaxInput;
		document.getElementById("minInput").value = intMinInput;
	}
	//select the difficulty for medium mode
	if(strDifficulty == "medium"){
		intMaxInput = 100;
		intMinInput = 1;
		document.getElementById("maxInput").value = intMaxInput;
		document.getElementById("minInput").value = intMinInput;
	}
	//select the difficulty for hard mode
	if(strDifficulty == "hard"){
		intMaxInput = 1000;
		intMinInput = 1;
		document.getElementById("maxInput").value = intMaxInput;
		document.getElementById("minInput").value = intMinInput;
	}
	//select the difficulty for impossible mode
	if(strDifficulty == "impossible"){
		intMaxInput = 100000000;
		intMinInput = 1;
		document.getElementById("maxInput").value = intMaxInput;
		document.getElementById("minInput").value = intMinInput;
	}
	return true;
}