var searchSwitcher = document.querySelector('.header__search-switcher');
var search = document.querySelector('.header__search');

var menuSwitcher = document.querySelector('.header__menu-switcher');
var menu = document.querySelector('.header__menu');

searchSwitcher.addEventListener('click', function() {
	setClass(searchSwitcher, 'header__search-switcher_opend');
	setClass(search, 'header__search_opend');
	removeClass(menu, 'header__menu_opend');
	removeClass(menuSwitcher, 'header__menu-switcher_opend');
});

menuSwitcher.addEventListener('click', function() {
	setClass(menuSwitcher, 'header__menu-switcher_opend');
	setClass(menu, 'header__menu_opend');
	removeClass(search, 'header__search_opend');
	removeClass(searchSwitcher, 'header__search-switcher_opend');
});

function setClass(elem, className) {
	elem.classList.toggle(className);
};

function removeClass(elem, className) {
	elem.classList.remove(className);
};