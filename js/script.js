$(function () {

	const arraySelezioni = [{
			value: 'paper',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_431666.png',
			win1: ['rock', 'La CARTA avvolge il SASSO'],
			win2: ['spock', 'La CARTA invalida SPOCK'],
			lose1: ['scissor', 'Le FORBICI tagliano la CARTA'],
			lose2: ['lizard', 'LIZARD mangia la CARTA']
		},
		{
			value: 'rock',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_57211.png',
			win1: ['lizard', 'Il SASSO uccide LIZARD'],
			win2: ['scissor', 'Il SASSO rompe le forbici'],
			lose1: ['paper', 'La CARTA avvolge il SASSO'],
			lose2: ['spock', 'SPOCK vaporizza il SASSO']
		},
		{
			value: 'scissor',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_431665.png',
			win1: ['paper', 'Le FORBICI tagliano la CARTA'],
			win2: ['lizard', 'Le FORBICI decapitano LIZARD'],
			lose1: ['rock', 'Il SASSO rompe le FORBICI'],
			lose2: ['spock', 'SPOCK rompe le FORBICI']
		},
		{
			value: 'lizard',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_2998.png',
			win1: ['spock', 'LIZARD avvelena SPOCK'],
			win2: ['paper', 'LIZARD mangia la CARTA'],
			lose1: ['rock', 'Il SASSO uccide LIZARD'],
			lose2: ['scissor', 'Le FORBICI decapitano LIZARD']
		},
		{
			value: 'spock',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_2999.png',
			win1: ['scissor', 'SPOCK rompe le FORBICI'],
			win2: ['rock', 'SPOCK vaporizza il SASSO'],
			lose1: ['paper', 'La CARTA invalida SPOCK'],
			lose2: ['lizard', 'LIZARD avvelena SPOCK']
		}
	]

	let userCount = 0;
	let cpuCount = 0;


	/* inizializzazione */

	$('.selection, .score').hide();
	$('.resultText').hide();




	/* tasti play e reset */

	$('#play, #reset').click(function () {
		$('.selection, .score, .resultText').toggle();
		$('#play, #reset').toggle();
		$('.video').show();
	})

	$('#play').click(() => {
		$('h1').text('Fai la tua scelta');
		$('.video').hide();

		/* $('.choice').removeClass('absolutePos'); */

	})

	$('#reset').click(() => {
		$('.score span').text(0);
		$('h1').text('Carta Forbici Sasso Lizard e Spock');
		$('.user-choice img, .cpu-choice img').fadeOut(0);

		userCount = 0;
		cpuCount = 0;

		/* $('.choice').addClass('absolutePos'); */


	})


	/* choice */
	$('.user-choice img, .cpu-choice img').fadeOut(0);


	$('.selection button img').click(function () {

		/* reset del resultText */
		$('.resultTextTop, .resultTextBottom').text("");



		$('.cpu-choice img').fadeOut(0);

		let userImg = $(this).attr('src');
		$('.user-choice img').attr('src', userImg).fadeIn();

		setTimeout(function () {
			let cpuImg = arraySelezioni[numRandom(0, 4)].imgLink;
			$('.cpu-choice img').attr('src', cpuImg).fadeIn();

			let userChoice = trovaPerAttr(arraySelezioni, "imgLink", userImg);
			let cpuChoice = trovaPerAttr(arraySelezioni, "imgLink", cpuImg);

			if (userChoice.value === cpuChoice.value) {
				$('.resultTextTop').text("È un pareggio");


			} else if (userChoice.win1[0] === cpuChoice.value) {

				$('.resultTextTop').text(("Hai vinto!").toUpperCase());
				$('.resultTextBottom').text(userChoice.win1[1]);
				$('.player-score').text(++userCount);

			} else if (userChoice.win2[0] === cpuChoice.value) {

				$('.resultTextTop').text(("Hai vinto!").toUpperCase());
				$('.resultTextBottom').text(userChoice.win2[1]);
				$('.player-score').text(++userCount);

			} else if (userChoice.lose1[0] === cpuChoice.value) {

				$('.resultTextTop').text(("Hai perso!").toUpperCase());
				$('.resultTextBottom').text(userChoice.lose1[1]);
				$('.cpu-score').text(++cpuCount);

			} else {


				$('.resultTextTop').text(("Hai perso!").toUpperCase());
				$('.resultTextBottom').text(userChoice.lose2[1]);
				$('.cpu-score').text(++cpuCount);

			}





			/* (userChoice.win1 === cpuChoice.value || userChoice.win2 === cpuChoice.value) {
				console.log('hai vinto');
				$('.player-score').text(++userCount);
			} else {
				console.log('hai perso');
				$('.cpu-score').text(++cpuCount);
			} */

		}, 1000);
	});





	/* random function */

	function numRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}


	function trovaPerAttr(arr, attr, val) {
		const trovato = arr.find(elemento => elemento[attr].toLowerCase() == val.toLowerCase())
		return trovato
	}


});