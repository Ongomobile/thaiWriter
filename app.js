const Time = ('#timeTxt');
const Subject = ('#subjectTxt');
const Tense = ('#tenseTxt');
const Verb = ('#verbText');
const Adjective = ('#adjectiveTxt');
const Question = ('#questionTxt');
const SentenceBtn = ('#makeSentenceBtnPressed');
const Results = ('#resultsDisplay');
const ResetBtn = ('#reset');
const Form = ('#myForm');
const InputTxt = ('.txtInput');

function getData() {
	$('Form').submit(event => {
	event.preventDefault();
	stop.eventProgatrion
	const getTime = $(event.currentTarget).find('input[name="time"]').val();
	const getSubject = $(event.currentTarget).find('input[name="subject"]').val();
	const getTense = $(event.currentTarget).find('input[name="tense"]').val();
	const getVerb = $(event.currentTarget).find('input[name="verb"]').val();
	const getAdjective = $(event.currentTarget).find('input[name="object"]').val();
	const getQuestion = $(event.currentTarget).find('input[name="question"]').val();
	const Str = `${getTime} ${getSubject} ${getTense} ${getVerb} ${getAdjective} ${getQuestion}`;
	$(Results).html(Str);
  });
}


function resetForm() {
	$(ResetBtn).click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
  });
}

function start(){
	resetForm();
	getData();
}
$(start);