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

	function animateText() {
		console.log('~in animateText')
		let customVarsAnimatedText = document.querySelector('#customVarsAnimatedText');
		let systemsAnimatedText = document.querySelector('#systemsAnimatedText');

		let customVarsText = ['read.', 'spend quality time.', 'write.', 'workout.', 'bake.'];

		//~ using space delimter to replace word by word (as opposed to char by char)
		var tl = new TimelineMax();//{ repeat: (this.count - 1) });

		// animation for custom variables feature
		// tl.to(customVarsAnimatedText, 10,{ text: {value: "hi"}, ease: "Power0.easeIn"});
		// ~gsap.config({nullTargetWarn:false});//https://greensock.com/forums/topic/22836-gsap-3-warnings/
		tl.to('#customVarsAnimatedText', {
			duration: 2,
			text: {
				value: "This is the new text",
				delimiter: " "
			},
			ease: "none"
		});
		// customVarsText.forEach(textToAnimate => {
		// 	tl.to(customVarsAnimatedText, {
		// 		duration: 10, 
		// 		text: {
		// 			value: textToAnimate
		// 		}
		// 		, ease: Power0.easeIn
		// 	});
		// });

		// tl.to(circle, this.inhale,
		// 	{
		// 		text: {
		// 			value: "inhale",
		// 			// delimiter: " ",
		// 		}, ease: Power0.easeIn
		// 	});
			// hold
			// .to(circle, this.hold,
			// 	{
			// 		text: {
			// 			value: "hold",
			// 			delimiter: " ",
			// 		}, ease: Power0.linear
			// 	})
			// // exhale
			// .to(circle, this.exhale,
			// 	{
			// 		text: {
			// 			value: "exhale",
			// 			delimiter: " ",
			// 		}, ease: Power0.easeOut
			// 	})

			// reset text
			// .to(circle, 0.01, { text: { value: " ", delimiter: " " }, ease: Power0.easeIn });
	}
	animateText();
})();