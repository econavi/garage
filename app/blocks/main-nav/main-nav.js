var classSearchSwitcher = 'main-nav__search-switcher';
var classSearchSwitcherIcon = 'search-switcher';
var classSearch = 'main-nav__search';

var classMenuSwitcher = 'main-nav__menu-switcher';
var classMenuSwitcherIcon = 'menu-switcher';
var classMenu = 'main-nav__menu';

var searchSwitcher = document.querySelector(`.${classSearchSwitcher}`);
var searchSwitcherIcon = document.querySelector(`.${classSearchSwitcherIcon}`);
var search = document.querySelector(`.${classSearch}`);

var menuSwitcher = document.querySelector(`.${classMenuSwitcher}`);
var menuSwitcherIcon = document.querySelector(`.${classMenuSwitcherIcon}`);
var menu = document.querySelector(`.${classMenu}`);

searchSwitcher.addEventListener('click', function() {
	setClass(searchSwitcherIcon, `${classSearchSwitcherIcon}_opend`);
	setClass(search, `${classSearch}_opend`);
	removeClass(menu, `${classMenu}_opend`);
	removeClass(menuSwitcherIcon, `${classMenuSwitcherIcon}_opend`);
});

menuSwitcher.addEventListener('click', function() {
	setClass(menuSwitcherIcon, `${classMenuSwitcherIcon}_opend`);
	setClass(menu, `${classMenu}_opend`);
	removeClass(search, `${classSearch}_opend`);
	removeClass(searchSwitcherIcon, `${classSearchSwitcherIcon}_opend`);
});

function setClass(elem, className) {
	elem.classList.toggle(className);
};

function removeClass(elem, className) {
	elem.classList.remove(className);
};