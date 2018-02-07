var productHeaderList = document.querySelectorAll('.product__header');

for(var i = 0; i < productHeaderList.length; i++) {
	var productHeaderItem = productHeaderList[i];
	productHeaderItem.addEventListener('click', hundler);

	function hundler(e) {
		var product = this.parentElement;
		if(product.classList.contains('product')) {
			product.classList.toggle('product_opend');
		}
	}
}

