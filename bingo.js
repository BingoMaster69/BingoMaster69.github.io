var usedNums = new Array(76);

function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	var sayings = new Array("SWEATS","GENTS/FELLAS","HE HITS THAT","GOOD TAKE","THATS LATE","YESSIR","SHORTED IT","NONSENSICAL HORSESHIT","STEAL","MY GUY QUIT","THATS ON ME","TOUGH","BUILD SPEAK","BADGE SPEAK","ANIMATION SPEAK","UGHUGH","OK 2K","LETS GO","LAG SPIKE","THATS SO GAY","ARE U KIDDING ME","THIS GAME IS...","NOT WHO I PASSED TO","NOOBS/CAREER GRINDERS");
	
	do {
		newNum = getNewNum() + 1;
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById("squarefree").style.backgroundColor = "White";
	document.getElementById(currSquare).style.backgroundColor = "White";
	document.getElementById(currSquare).innerHTML = sayings[newNum - 1];
}

function getNewNum() {
	return Math.floor(Math.random() * 24);
	
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	
	newCard();
}