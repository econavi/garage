// получаем ссылки из главного меню
var elems = document.querySelectorAll('.main-menu__link');

for(var i = 0; i < elems.length; i++) {
	// если значение из адресной строки браузера совпадает со значением атрибута href у ссылки, то для ссылки:
	if(window.location.pathname == elems[i].getAttribute('href')) {
		// добавляем класс
		elems[i].classList.add('main-menu__link_active');
		// удаляем атрибут href
		elems[i].removeAttribute('href');
		// устанавливаем стили для курсора мыши по дефолту
		elems[i].style.cursor = 'default';
	}
}