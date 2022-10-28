const labelPagina = document.getElementById('menu__paginas');
const labelUtilidade = document.getElementById('menu__utilidades');
const labelJogo = document.getElementById('menu__jogos');

const paginas = document.querySelectorAll('.webpage');
const utilidades = document.querySelectorAll('.utility');
const jogos = document.querySelectorAll('.game');

const menu__projetos = document.querySelectorAll("input[type=radio]");

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

for (let i of menu__projetos){
	i.addEventListener('change', () => {
		if (menu__projetos[0].checked){
			paginasON();
			utilidadeslOff();
			jogosOff();
		}
		if (menu__projetos[1].checked){
			paginasOff();
			utilidadeslON();
			jogosOff();
		}
		if (menu__projetos[2].checked){
			paginasOff();
			utilidadeslOff();
			jogosON();
		}
	})
}
