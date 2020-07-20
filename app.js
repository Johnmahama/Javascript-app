
var questions = [
    new Question("Which one is not an object oriented programming language ?",["Java","C#","Python","C"],"C"),
    new Question("Which language is good for styling web pages ?",["Jquery","HTML","CSS","XML"],"CSS"),
    new Question("There are ____ main components of object oriented programming",["1","6","2","4",],"4"),
    new Question("MVC is a ______.",["Language","Library","Framework","All of the Above"],"Framework")

];


var quiz = new Quiz(questions);
function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show question
        var element = document.getElementById("question")
        element.innerHTML = quiz.getQuestionIndex().text;
 
        var choices  = quiz.getQuestionIndex().choices;
        for (i =0 ; i< choices.length;i++){
            var element  = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress()
    }
}
function guess(id,guess){
    var button  = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}

function showProgress(){
         var currentQuestionNumber = quiz.questionIndex + 1;
         var element = document.getElementById('progress');
         element.innerHTML ="Question  " + currentQuestionNumber + " of "+ quiz.questions.length;
}


function showScores(){
    var gameOverHtml = "<h1> Results </h1>"
     gameOverHtml  += "<h2 id='score'>Your Score:" + quiz.score + "</h2>";
     var element = document.getElementById("quiz");
     element.innerHTML = gameOverHtml;
}

populate();
