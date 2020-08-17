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
	];

	let userCount = 0;
	let cpuCount = 0;
	let maxScore = 2;

	/* inizializzazione */

	$('.score, .choice, .selection').hide();

	/* tasti play e reset */

	$('#play, #reset').click(() => {
		$('.selection, .score, .choice, #play, #reset').toggle();
	});

	$('#play').click(() => {
		$('h1').text(`Fai la tua scelta! Vince chi totalizza ${maxScore} punti`);
		$('.video').remove();
	});

	$('#reset').click(() => {
		$('*').hide();
		location.reload();

		/* $('.score span').text(0);
		$('h1').text('Carta Forbici Sasso Lizard e Spock');
		$('.user-choice img, .cpu-choice img').fadeOut(0);
		$('.resultTextTop, .resultTextBottom').text('');
		if (userCount == maxScore || cpuCount == maxScore) {
			$('*').hide();
			location.reload();
		} */
	});

	/* choice */
	$('.user-choice img, .cpu-choice img').fadeOut(0);

	$('.selection button img').click(function () {

		/* reset del resultText */
		$('.resultTextTop, .resultTextBottom').text('');

		$('.cpu-choice img, .overlay img').fadeOut(0);

		let userImg = $(this).attr('src');
		$('.choice').fadeIn();
		$('.user-choice > img').attr('src', userImg).fadeIn();

		setTimeout(function () {
			let cpuImg = arraySelezioni[numRandom(0, 4)].imgLink;
			$('.choice').fadeIn();
			$('.cpu-choice > img').attr('src', cpuImg).fadeIn();

			let userChoice = trovaPerAttr(arraySelezioni, 'imgLink', userImg);
			let cpuChoice = trovaPerAttr(arraySelezioni, 'imgLink', cpuImg);

			if (userChoice.value === cpuChoice.value) {
				$('.resultTextTop').text('È un pareggio');

			} else if (userChoice['win1'][0] === cpuChoice.value) {
				checkWin('Hai vinto!', 'win1', userChoice);

			} else if (userChoice['win2'][0] === cpuChoice.value) {
				checkWin('Hai vinto!', 'win2', userChoice);

			} else if (userChoice.lose1[0] === cpuChoice.value) {
				checkWin('Hai perso!', 'lose1', userChoice);

			} else {
				checkWin('Hai perso!', 'lose2', userChoice);
			}

			if (userCount == maxScore) {
				endGame('Hai vinto!', 'sad');
			} else if (cpuCount == maxScore) {
				endGame('Hai perso!', 'happy');
			}

		}, 1000);
	});


	// FUNCTIONS //	

	/* Random function */
	function numRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	/* Trova un elemento per attributo in un array di oggetti */
	function trovaPerAttr(arr, attr, val) {
		const trovato = arr.find(elemento => elemento[attr].toLowerCase() == val.toLowerCase());
		return trovato;
	}

	/* Controllo vittoria o sconfitta */
	function checkWin(str, attr, choice) {
		$('.resultTextTop').text((str).toUpperCase());
		$('.resultTextBottom').text(choice[attr][1]);
		if (attr == 'win1' || attr == 'win2') {
			$('.user-score').text(++userCount);
			$('.cpu-choice .overlay img').fadeIn();
		} else {
			$('.cpu-score').text(++cpuCount);
			$('.user-choice .overlay img').fadeIn();
		}
	}

	/* Endgame - Win or Lose */
	function endGame(testo, img) {
		$('h1').text((testo).toUpperCase());
		$('.selection').hide();

		if (img == 'sad') {
			$('#sad-sheldon').fadeIn();
		} else if (img == 'happy') {
			$('#happy-sheldon').fadeIn();
		}
		$('#reset').text('Play again!');
	}
});