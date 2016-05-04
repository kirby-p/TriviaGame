// List of questions, choices, and correct answer
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
}, {
	'question': 'How does Lars keep watch of the kids at the lake?',
	'choices': [
		'Roll Call', 
		'He doesn\'t...', 
		'Buddy System', 
		'Sitting on a lifeguard tower'
	],
	'answer': 2 
}, {
	'question': 'What camp is Camp Hope\'s rival?',
	'choices': [
		'Camp Hopeless', 
		'Camp Anawanna', 
		'Camp Sports', 
		'Camp MVP'
	],
	'answer': 3 
}, {
	'question': 'What is the name of the inflatable launching pad in the lake?',
	'choices': [
		'The Beast', 
		'The Big One', 
		'Big Bertha', 
		'The Blob'
	],
	'answer': 3
}, {
	'question': 'Who ends up saving the dance?',
	'choices': [
		'Lars', 
		'Tim', 
		'Gerry', 
		'Pat'
	],
	'answer': 1
}, {
	'question': 'What was Gerry\'s age and weight?',
	'choices': [
		'Age 10, 150 pounds', 
		'Age 9, 234 pounds', 
		'Age 11, 141 pounds', 
		'Age 12, 137 pounds'
	],
	'answer': 2
}, {
	'question': 'How does Gerry win the Apache Relay?',
	'choices': [
		'jumping over Camp MVP in a go-kart race', 
		'eat in a hot dog eating contest', 
		'KO in a boxing match', 
		'Answering correctly in the Hall of Intelligence'
	],
	'answer': 0
}, {
	'question': 'What does Tony Perkis offer Nicholas to try to free himself?',
	'choices': [
		'Money', 
		'Salami', 
		'M&M\'s', 
		'A \"Hershey Kiss\"'
	],
	'answer': 3
}, {
	'question': 'What was NOT something Tony Perkis said while doing yoga poses?',
	'choices': [
		'\"Part the wild horse\'s mane\"', 
		'\"Feel the chi\"', 
		'\"Recline the pigeon\"', 
		'\"Repulse the monkey\"'
	],
	'answer': 2
}, {
	'question': 'After losing his job, what does Tony try to start selling?',
	'choices': [
		'Cars', 
		'Chocolate', 
		'Healing crystals', 
		'Slim Fast'
	],
	'answer': 2
}];

// Picture array
var pictures = [
	'<img id="captain" src="assets/images/captain.png">',
	'<img id="twinkies" src="assets/images/twinkies.png">',
	'<img id="buddy" src="assets/images/buddy.gif">',
	'<img id="campMVP" src="assets/images/campMVP.png">',
	'<img id="blob" src="assets/images/blob.gif">',	
	'<img id="dance" src="assets/images/dance.png">',
	'<img id="pounds" src="assets/images/pounds.png">',
	'<img id="race" src="assets/images/race.png">',
	'<img id="kiss" src="assets/images/kiss.png">',
	'<img id="yoga" src="assets/images/yoga.png">',
	'<img id="crystal" src="assets/images/crystal.png">'	
];

// Question number
var qNumber = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0; 

// "Start" will begin the trivia game
$('#start').on('click', function(){
	displayQuestion(qNumber);
});

// Displays the question
function displayQuestion(qNumber){
	$('#start').remove();
	$('#question').html(questions[qNumber].question);
	displayChoices(qNumber);
};

// Displays the choices
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

// Checks if answer is correct
function compare(selection, qNumber) {
	var userChoice = selection;
	if(selection == ('selection' + questions[qNumber].answer)) {
		console.log('match');
		$('#question, #answerDisplay').empty();
		$('#result').html('Yes!');
		correct++;
	}
	else {
		console.log('nope');
		$('#question, #answerDisplay').empty();
		$('#result').html('Nope!');
		$('#correctAnswer').html('The correct answer is: ' + questions[qNumber].choices[questions[qNumber].answer]);
		incorrect++;
	}
	$('#image').html(pictures[qNumber]);
	setTimeout(fiveSeconds, 2000);
};

// Timer changes to next question after 5 seconds
function fiveSeconds(){
	qNumber++;
		$('#image').empty();
		$('#result').empty();
		$('#correctAnswer').empty();
	if(qNumber < questions.length){
		displayQuestion(qNumber);

	}
	else{
		console.log('Correct: ' + correct);
		console.log('Incorrect: ' + incorrect);

	}
};

