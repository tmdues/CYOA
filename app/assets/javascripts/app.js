$(function() {
   App.pusher = new Pusher("311e10402dc58e13b25c");
 
   App.currentUser = new App.Models.User();
   var questions = new App.Collections.Questions();
 
   var loginView = new App.Views.Login({el: $('#loginView'), model: App.currentUser});
   var newQuestionView = new App.Views.NewQuestion({el: $('#newQuestionView'), model: questions});
   var questionsView = new App.Views.Questions({el: $('#questions'), model: questions});
 
   new Backpusher(App.pusher.subscribe("question-channel"), questions);
   questions.fetch();
});