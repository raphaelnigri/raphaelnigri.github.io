/*Desenvolvido por Raphael Nigri*/


/*abrir e fechar menu lateral*/
const botao = document.querySelector('.menu-lateral__button')
const menu = document.querySelector('.menu-lateral__content')

const main = document.querySelector('main')
const footer = document.querySelector('footer')

botao.addEventListener('click', () => {
	botao.classList.toggle('active')
	menu.classList.toggle('menu-lateral__content--ativo')
	main.classList.toggle('fade')
	footer.classList.toggle('fade')
})

/*fechar menu ao clicar em contatos*/
const item = document.querySelector('#contato')

item.addEventListener('click', () => {
	botao.classList.toggle('active')
	menu.classList.toggle('menu-lateral__content--ativo')
	main.classList.toggle('fade')
	footer.classList.toggle('fade')
})
