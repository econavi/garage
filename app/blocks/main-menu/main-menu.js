// получаем ссылку с href из адресной строки
var elems = document.querySelectorAll('.main-menu__link');

for(var i = 0; i < elems.length; i++) {
	if(elems[i].getAttribute('href') == window.location.pathname) {
		elems[i].classList.add('main-menu__link_active');
		elems[i].removeAttribute('href');
		elems[i].style.cursor = 'default';
	}
}