const labelPagina = document.querySelector('.label__pagina');
const labelUtilidade = document.querySelector('.label__utilidade');
const labelJogo = document.querySelector('.label__jogo');

const paginas = document.querySelectorAll('.webpage');
const utilidades = document.querySelectorAll('.utility');
const jogos = document.querySelectorAll('.game');

const input = document.querySelectorAll("input[type=radio]");

function paginasON (){
	if (paginas[0].classList.contains('off')) {
		for(let i of paginas) {  
			i.classList.remove('off');
		}
	};
    if (!labelPagina.classList.contains('apresentacao__menu__item--active')){
        labelPagina.classList.add('apresentacao__menu__item--active');
    }
}
function paginasOff(){
	if (!paginas[0].classList.contains('off')) {
		for(let i of paginas) {  
			i.classList.add('off');
		}
	};
    if (labelPagina.classList.contains('apresentacao__menu__item--active')){
        labelPagina.classList.remove('apresentacao__menu__item--active');
    }
}

function utilidadeslON (){
	if (utilidades[0].classList.contains('off')) {
		for(let i of utilidades) {  
			i.classList.remove('off');
		}
	};
    if (!labelUtilidade.classList.contains('apresentacao__menu__item--active')){
        labelUtilidade.classList.add('apresentacao__menu__item--active');
    }
}
function utilidadeslOff(){
	if (!utilidades[0].classList.contains('off')) {
		for(let i of utilidades) {  
			i.classList.add('off');
		}
	};
    if (labelUtilidade.classList.contains('apresentacao__menu__item--active')){
        labelUtilidade.classList.remove('apresentacao__menu__item--active');
    }
}

function jogosON (){
	if (jogos[0].classList.contains('off')) {
		for(let i of jogos) {  
			i.classList.remove('off');
		}
	};
    if (!labelJogo.classList.contains('apresentacao__menu__item--active')){
        labelJogo.classList.add('apresentacao__menu__item--active');
    }
}
function jogosOff(){
	if (!jogos[0].classList.contains('off')) {
		for(let i of jogos) {  
			i.classList.add('off');
		}
	};
    if (labelJogo.classList.contains('apresentacao__menu__item--active')){
        labelJogo.classList.remove('apresentacao__menu__item--active');
    }
}

for (let i of input){
	i.addEventListener('change', () => {
		if (input[0].checked){
			paginasON();
			utilidadeslOff();
			jogosOff();
		}
		if (input[1].checked){
			paginasOff();
			utilidadeslON();
			jogosOff();
		}
		if (input[2].checked){
			paginasOff();
			utilidadeslOff();
			jogosON();
		}
	})
}
