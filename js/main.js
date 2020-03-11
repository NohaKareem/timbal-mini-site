//self executing anonymous function
(function() {
	"use strict";

	let navLinks = document.querySelectorAll("nav a");
	// console.log(navLinks)

	// ~green sock smooth scroll effect for navigation links
	function smoothScroll(e) {
		e.preventDefault();
		// var href = e.currentTarget.dataset.url;
		// TweenLite.to(window, 1, { scrollTo: { y: "#" + href, offsetY: 3, autoKill: false } });
	}

	// prevent default behavior for links
	function preventDefaultBehavior(e) {
		e.preventDefault();
	}

	navLinks.forEach(navLink => {
		navLink.addEventListener("click", preventDefaultBehavior);
	});

})();