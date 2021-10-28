(function () {
	document.addEventListener('DOMContentLoaded', function () {
		const setBtn = document.querySelectorAll('.set__btn');
		const catalogList = document.querySelectorAll('.catalog__list')

		document.querySelector('.set__btn-left').addEventListener('click', changeCatalog);
		document.querySelector('.set__btn-right').addEventListener('click', changeCatalog);

		function changeCatalog(e) {
			const target = e.target;
			Array.from(setBtn).forEach(item => {
				item.classList.remove('active')
			});
			Array.from(catalogList).forEach(item => {
				item.classList.remove('active')
			});
			target.classList.add('active');
			if (target.classList.contains('set__btn-left')) {
				document.querySelector('.catalog__list-everyday').classList.add('active')
			}
			else {
				document.querySelector('.catalog__list-erotic').classList.add('active')
			}
		}

		//Модалка
		document.querySelectorAll('.catalog__item').forEach(function (modal) {
			modal.addEventListener('click', function (event) {
				const path = event.path[0].dataset.target;
				document.querySelector(`.catalog-modal__img[data-img="${path}"]`).classList.add('active');
				document.querySelector(`.catalog-modal__name[data-title="${path}"]`).classList.add('active');
				document.querySelector('.catalog-modal').classList.add('active');
				document.querySelector('.overlay').classList.add('active');
			});
		});

		document.querySelector('.catalog-modal__closed').addEventListener('click', modalClosed);
		document.querySelector('.overlay').addEventListener('click', modalClosed);

		function modalClosed() {
			document.querySelectorAll('.catalog-modal__img').forEach(function(modalClosedImg) {
				modalClosedImg.classList.remove('active');
			});

			document.querySelectorAll('.catalog-modal__name').forEach(function(modalClosedName) {
				modalClosedName.classList.remove('active');
			});

			document.querySelector('.catalog__modal').classList.remove('active');
			document.querySelector('.overlay').classList.remove('active');
		}

	});
})();