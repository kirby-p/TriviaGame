var questions = [{
	'question': 'What is 2*5?',
	'choices': [
		2, 
		5, 
		10, 
		15
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

var twinkies = 	'<img id="twinkies" src="assets/images/twinkies.png">';

var pictures = [
	'ten',
	twinkies
];
var qNumber = 1;


$('#start').on('click', function(){
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0; 
	displayQuestion();
	displayChoices();
});

function displayQuestion(){
	$('#start').remove();
	$('#question').html(questions.question);
	displayChoices();
};

function displayChoices(){
	var list = '';

	for(i = 0; i < questions[qNumber].choices.length; i++){
		list += '<div class=choices id=selection' + [i] + '>' + questions[qNumber].choices[i] + '</div>';
	};

	$('#answerDisplay').html(list);

	$('.choices').bind('click', function(){
		var value = $(this).attr('id');
		compare(value);
	});
};

function compare(selection) {
	var userChoice = selection;
	if(selection == ('selection' + questions[qNumber].answer)) {
		console.log('match');
		$('#question, #answerDisplay').remove();
		$('#result').html('Yes!');
	}
	else {
		console.log('nope');
		$('#question, #answerDisplay').remove();
		$('#result').html('Nope!');
		$('#correctAnswer').html('The correct answer is: ' + questions[qNumber].choices[questions[qNumber].answer]);
	}
	$('#image').html(pictures[qNumber]);
};


