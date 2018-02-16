var html = document.documentElement;
var body = document.body;
var modal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal__close-btn');
var trigger = document.querySelectorAll('.js-modal-trigger');
var pagePosition = null;

for(var i = 0; i < trigger.length; i++) {
	addEvent(trigger[i], 'click', triggerClickHandler);
}

function triggerClickHandler(e) {
	e.preventDefault();
	pagePosition = getBodyScrollTop();
	openModal();
	addEvent(modal, 'click', modalClickHandler);
	
}

function modalClickHandler(e) {
	e.preventDefault();
	if(checkClass(e.target, 'modal') || checkClass(e.target, 'modal__close-btn')) {
		closeModal();
		body.scrollTop = pagePosition;
		html.scrollTop = pagePosition;
		removeEvent(modal, 'click', modalClickHandler);
	}
}

function openModal() {
	modal.classList.remove('modal_isClosed');
	setTimeout(function() {
		body.style.overflow = 'hidden';
		html.style.overflow = 'hidden';
	}, 300);
}

function closeModal() {
	modal.classList.add('modal_isClosed');
	body.style.overflow = '';
	html.style.overflow = '';
}

function addEvent(element, event, handler) {
	element.addEventListener(event, handler);
}

function removeEvent(element, event, handler) {
	element.removeEventListener(event, handler);
}

function checkClass(elem, classSelf) {
	return elem.classList.contains(classSelf);
}

function getBodyScrollTop() {
  return window.pageYOffset || 
    (document.documentElement && document.documentElement.scrollTop) || 
    (document.body && document.body.scrollTop);
}