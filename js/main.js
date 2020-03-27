//self executing anonymous function
(function() {
	"use strict";

	let emptyLinks = document.querySelectorAll('a[href="#"]');
	let navLinks = document.querySelectorAll('nav ul li a');
	let mblNavBurger = document.querySelector('#mblNavBurger');
	let mblNavMenu = document.querySelector('#mblNavMenu');
	// console.log(emptyLinks)

	// green sock smooth scroll effect for navigation links
	navLinks.forEach(navLink => {
		addEventListener("click", smoothScroll);
	});

	function smoothScroll(e) {
		e.preventDefault();
		var href = e.target.dataset.url;
		TweenLite.to(window, 3, { scrollTo: { y: "#" + href, offsetY: 3, autoKill: false } });
	}

	// prevent default behavior for links
	function preventDefaultBehavior(e) {
		e.preventDefault();
	}

	emptyLinks.forEach(emptyLink => {
		emptyLink.addEventListener("click", preventDefaultBehavior);
	});

	// apply burger menu animation and show nav menu on burger icon click  
	mblNavBurger.addEventListener("click", () => {
		mblNavBurger.classList.toggle('animate');
		mblNavMenu.classList.toggle('hidden');
	});

	function animateText() {
		let customVarsAnimatedText = document.querySelector('#customVarsAnimatedText');
		let systemsAnimatedText = document.querySelector('#systemsAnimatedText');

		let customVarsText = ['read.', 'spend quality time.', 'work out.', 'bake.', 'write.'];

		// text animation for custom variables feature (iterates through text activityText prompts indefinitely)
		gsap.registerPlugin(TextPlugin);

		var tl = new TimelineMax({repeat: -1});
		customVarsText.forEach(activityText => {
			tl.to(customVarsAnimatedText, {
				text: " ", 
			}).to(customVarsAnimatedText, {
				duration: 3,
				text: activityText,
				ease: Power3.easeInOut
			});
		});
	}
	animateText();
})();