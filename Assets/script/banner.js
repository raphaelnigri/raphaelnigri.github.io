/*Desenvolvido por Raphael Nigri*/

const html = document.querySelector('html');
let idioma = html.getAttribute('lang');

const palavra = document.querySelector('.digitar');
const cursor = document.querySelector('.cursor');
const arrayPT = ["Criatividade.", "Soluções.", "Estabilidade.", "Você!!"];
const arrayEN = ["Creativity.", "Solutions.", "Stability.", "You!!"];

const typingDelay = 80;
const erasingDelay = 50;
const newTextDelay = 1100;
let palavraIndex = 0;
let charIndex = 0;

detectaIdioma();
loop();

function detectaIdioma(){

	if (idioma === 'en-US') {
		array = arrayEN;
	}
	
	else{
		array = arrayPT;
	}
}

function digita(){

	if (charIndex < array[palavraIndex].length) {
	  	if(!cursor.classList.contains("executando")) cursor.classList.add("executando");
	  	palavra.textContent += array[palavraIndex].charAt(charIndex);
	  	charIndex++;
	  	setTimeout(digita, typingDelay);
	} 
	else {
		cursor.classList.remove("executando");
		setTimeout(apaga, newTextDelay);
	}
}

function apaga(){
	if (charIndex > 0) {
		if(!cursor.classList.contains("executando")) cursor.classList.add("executando");
		palavra.textContent = array[palavraIndex].substring(0, charIndex-1);
		charIndex--;
		setTimeout(apaga, erasingDelay);
	} 
	else {
		cursor.classList.remove("executando");
		palavraIndex++;
		if(palavraIndex>=array.length) palavraIndex=0;
		setTimeout(digita, typingDelay + 1100);
	}
}

function loop(){
	if(array.length) setTimeout(digita, newTextDelay);
}
