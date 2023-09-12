const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
	const select = dropdown.querySelector('.select');
	const caret = dropdown.querySelector('.caret');
	const men = dropdown.querySelector('.men');
	const options = dropdown.querySelector('.men li');
	const selected = dropdown.querySelector('.selected');


select.addEventListerner('click', () => {
	select.classList.toggle('select-clicked');
	caret.classList.toggle('caret-rotate');
	men.classList.toggle('men-open');
});
options.forEach(option => {
	option.addEventListerner('click',() => {
		selected.innerText = option.innerText;
		select.classList.remove('select-clicked');
		caret.classList.remove('caret-rotate');
		men.classList.remove('men-open');
		options.forEach(options => {
			option.classList.remove('active');
		});
		option.classList.add('active');
	});
});
});

