var questions = [{
	'question': 'What nickname is given to Gerry?',
	'choices': [
		'Dave', 
		'Fatso', 
		'Captain', 
		'Colonel Sanders'
	],
	'answer': 2
}, {
	'question': 'What piece of advice does Roy give after a night of fun and debauchery?',
	'choices': [
		'\"Don\'t put twinkies on your pizza\"', 
		'\"Ketchup and chocolate don\'t mix\"', 
		'\"Eat 5 square meals a day\"', 
		'\"Keep your eyes on the bat, put it in the pocket, swing harder...I have no idea what I\'m saying\"'
	],
	'answer': 0
}];

var pictures = [
	'<img id="captain" src="assets/images/captain.png">',
	'<img id="twinkies" src="assets/images/twinkies.png">'
];
var qNumber = 0;


$('#start').on('click', function(){
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0; 
	displayQuestion(qNumber);
});

function displayQuestion(qNumber){
	$('#start').remove();
	$('#question').html(questions[qNumber].question);
	displayChoices(qNumber);
};

function displayChoices(qNumber){
	var list = '';
	for(i = 0; i < questions[qNumber].choices.length; i++){
		list += '<div class=choices id=selection' + [i] + '>' + questions[qNumber].choices[i] + '</div>';
	};

	$('#answerDisplay').html(list);

	$('.choices').bind('click', function(){
		var value = $(this).attr('id');
		compare(value, qNumber);
	});
};

function compare(selection, qNumber) {
	var userChoice = selection;
	if(selection == ('selection' + questions[qNumber].answer)) {
		console.log('match');
		$('#question, #answerDisplay').empty();
		$('#result').html('Yes!');
	}
	else {
		console.log('nope');
		$('#question, #answerDisplay').empty();
		$('#result').html('Nope!');
		$('#correctAnswer').html('The correct answer is: ' + questions[qNumber].choices[questions[qNumber].answer]);
	}
	$('#image').html(pictures[qNumber]);
	setTimeout(fiveSeconds, 5000);
};

function fiveSeconds(){
	qNumber++;
	$('#image').empty();
	$('#result').empty();
	$('#correctAnswer').empty();
	displayQuestion(qNumber);
};

