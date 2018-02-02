var toggles = document.querySelectorAll('.accordion__toggle');

for(var i = 0; i < toggles.length; i++) {
	toggles[i].addEventListener('click', hundler);
}

function hundler(e) {
	e.preventDefault();
	var accordion = this.parentElement;
	accordion.classList.toggle('accordion_active');

	var contents = accordion.children;
	for(var i = 0; i < contents.length; i++) {
		if(contents[i].classList.contains('accordion__content')) {
			var content = contents[i];
			if(content.style.height) {
				content.style.height = null;
			} else {
				content.style.height = content.scrollHeight + 'px';
			}
		}
	}
}