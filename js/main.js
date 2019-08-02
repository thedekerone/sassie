let navbar = document.getElementById('navbar');
document.addEventListener('scroll', () => {
	console.log(window.scrollY <= 20);
	if (window.scrollY >= 20) {
		navbar.classList.add('scrolled');
		console.log(navbar.classList);
	} else {
		navbar.classList.remove('scrolled');
	}
});
