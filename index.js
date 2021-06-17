
// Cuenta cuantos botones hay en la pantalla

var totalOfButtons = document.querySelectorAll(".drum").length


// Añade un addEventListener(click) a cada boton que habia an pantalla

for (var i = 0; i < totalOfButtons; i += 1 ) {

	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		
		// this.style.color = "blue";


		// Cuando el boton sea presionado - Guarda en la variable el nombre de cada boton

		var buttonInnerHTML = this.innerHTML;

		// Y hazlo sonar

		makeSound(buttonInnerHTML);

		buttonAnimation(buttonInnerHTML);

	});

}


// Cada que des click a cualquier tecla - EventListener(keydown) - si tiene sonido, hazla sonar

document.addEventListener("keydown", function(event){
	
	makeSound(event.key);

	buttonAnimation(event.key);

});


// Cada sonido relacionado con su boton y tecla

function makeSound(key) {

	switch (key) {
			case "a":
				var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();
				break;
			case "s":
			var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();
				break;
			case "d":
				var snare = new Audio("sounds/snare.mp3");
				snare.play();
				break;
			case "j":
			var kickBass = new Audio("sounds/kick-bass.mp3");
				kickBass.play();
				break;
			case "k":
				var tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();
				break;
			case "l":
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
				break;
			case "w":
			var crash = new Audio("sounds/crash.mp3");
				crash.play();
				break;
			default:
				// statements_def
				break;
		}

}

function buttonAnimation(currentKey) {

	var activeButton = document.querySelector("." + currentKey);

	activeButton.classList.add("pressed");

	setTimeout(function() {
		activeButton.classList.remove("pressed");
	}, 100);
}


