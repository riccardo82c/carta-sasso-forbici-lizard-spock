$(function () {


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
	})





});