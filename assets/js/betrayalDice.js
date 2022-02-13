 function rollDice() {
	var showDice = document.getElementById("showDie");

	while (showDice.hasChildNodes()) {
		showDice.removeChild(showDice.lastChild);
	}

	var playerDice = document.getElementById("playerDice").value;

	var oppDice = document.getElementById("oppDice").value;

	var status = document.getElementById("status");

	var playerRoll = new Array();
	for (var i = 1; i <= playerDice; i++){
		playerRoll.push(Math.floor(Math.random() * 3));
	}

	var oppRoll = new Array();
	for (var j = 1; j <= oppDice; j++){
		oppRoll.push(Math.floor(Math.random() * 3));
	}

	for (var c in playerRoll) {
		var diceShow = document.createElement('span');
		diceShow.id = "die"+[c];
		diceShow.className = "dice";
		diceShow.innerHTML = playerRoll[c];
		showDice.appendChild(diceShow);
	}

	for (var d in oppRoll) {
		var diceShowOpp = document.createElement('span');
		diceShowOpp.id = "die";
		diceShowOpp.className = "dice oppDice";
		diceShowOpp.innerHTML = oppRoll[d];
		showDice.appendChild(diceShowOpp);
	}

	var playerDiceTotal = playerRoll.reduce(addp,0);
	function addp(a, b) {
		return a + b;
	}

	var oppDiceTotal = oppRoll.reduce(addo,0);
	function addo(a, b) {
		return a + b;
	}

	status.innerHTML = "You rolled "+playerDiceTotal+".<br>Your opponent rolled "+oppDiceTotal+".";

	if(playerDiceTotal > oppDiceTotal) {
		status.innerHTML += "<br>You won the dice roll!!";
	} else if(playerDiceTotal < oppDiceTotal) {
		status.innerHTML += "<br>You lost the dice roll!!";
	}


}

function refresh() {
	window.location.reload();
}