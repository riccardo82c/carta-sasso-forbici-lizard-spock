$(function () {

	// definisco un array di obj
	const arraySelezioni = [{
			value: 'paper',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_431666.png',
			win1: 'rock',
			win2: 'spock',
			lose1: 'scissors',
			lose2: 'lizard'
		},
		{
			value: 'rock',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_57211.png',
			win1: 'lizard',
			win2: 'scissors',
			lose1: 'paper',
			lose2: 'spock'
		},
		{
			value: 'scissors',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_431665.png',
			win1: 'paper',
			win2: 'lizard',
			lose1: 'rock',
			lose2: 'spock'
		},
		{
			value: 'lizard',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_2998.png',
			win1: 'spock',
			win2: 'paper',
			lose1: 'rock',
			lose2: 'scissors'
		},
		{
			value: 'spock',
			imgLink: 'https://cdn.onlinewebfonts.com/svg/img_2999.png',
			win1: 'scissors',
			win2: 'rock',
			lose1: 'paper',
			lose2: 'lizard'
		}
	]


	/* inizializzazione */

	$('.selection, .score').hide();


	/* tasti play e reset */

	$('#play, #reset').click(function () {
		$('.selection, .score').toggle();
		$('#play, #reset').toggle();
	})

	$('#play').click(() => {
		$('h1').text('Fai la tua scelta');
	})

	$('#reset').click(() => {
		$('.score span').text(0);
		$('h1').text('Carta Sasso Forbici Lizard e Spock');
		$('.user-choice img, .cpu-choice img').fadeOut(0);
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
				/* pareggio */
				console.log('pareggio');
			} else if (userChoice.win1 === cpuChoice.value || userChoice.win2 === cpuChoice.value) {
				console.log('hai vinto');
			} else {
				console.log('hai perso');
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