$(function () {

	// definisco un array di obj
	const arraySelezioni = [{
			value: 'paper',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_431666.png',
			win1: 'rock',
			win2: 'spock'
		},
		{
			value: 'rock',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_57211.png',
			win1: 'lizard',
			win2: 'scissors'
		},
		{
			value: 'scissors',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_431665.png',
			win1: 'paper',
			win2: 'lizard'
		},
		{
			value: 'lizard',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_2998.png',
			win1: 'spock',
			win2: 'paper'
		},
		{
			value: 'spock',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_2999.png',
			win1: 'scissors',
			win2: 'rock'
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
		$('.choice').removeClass('absolutePos');

	})

	$('#reset').click(() => {
		$('.score span').text(0);
		$('h1').text('Carta Forbici Sasso Lizard e Spock');
		$('.user-choice img, .cpu-choice img').fadeOut(0);

		userCount = 0;
		cpuCount = 0;

		$('.choice').addClass('absolutePos');


	})


	/* choice */



	$('.user-choice img, .cpu-choice img').fadeOut(0);


	$('.selection button img').click(function () {
		$('.cpu-choice img').fadeOut(0);

		let userImg = $(this).attr('src');
		$('.user-choice img').attr('src', userImg).fadeIn();

		setTimeout(function () {
			let cpuImg = arraySelezioni[numRandom(0, 4)].imgLink;
			$('.cpu-choice img').attr('src', cpuImg).fadeIn();

			let userChoice = trovaPerAttr(arraySelezioni, "imgLink", userImg);
			let cpuChoice = trovaPerAttr(arraySelezioni, "imgLink", cpuImg);

			if (userChoice.value === cpuChoice.value) {
				console.log('pareggio');
			} else if (userChoice.win1 === cpuChoice.value || userChoice.win2 === cpuChoice.value) {
				console.log('hai vinto');
				$('.player-score').text(++userCount);
			} else {
				console.log('hai perso');
				$('.cpu-score').text(++cpuCount);
			}

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