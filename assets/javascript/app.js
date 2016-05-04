var questions = {
	'question': 'What is 2*5?',
	'choices': [2, 5, 10, 15, 20],
	'answer': 2
};


$('#start').on('click', function(){
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0; 
	displayQuestions();
	displayChoices();

});

function displayQuestions(){
	$('#start').remove();
	$('#question').html(questions.question);
	displayChoices();
};

function displayChoices(){
	var list = '<ul>';

	for(i = 0; i < 4; i++){
		list += '<li>answer ' + i + '</li>';
	};

	list += '</ul>';
	$('#choices').html(list);



};