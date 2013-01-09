App.Views.Question = Backbone.View.extend({
   tagName: 'li',
   className: 'question',
   template: _.template($("#question-template").html()),
  
   events: {
       "click .voteup": "upVote",
       "click .votedown": "downVote"
    },
 
   initialize: function() {
      this.model.on("change", this.render, this);
   },
   render: function() {
         var data = this.model.toJSON();
      data.tally = this.model.voteTally();
       
      this.$el.html(this.template(data));
	   
      var userName = App.currentUser.get('userName');
      this.$('.voteup').toggleClass("selected", this.model.didUserVoteUp(userName));
      this.$('.votedown').toggleClass("selected", this.model.didUserVoteDown(userName));
 
       return this;
   },
 
   upVote: function() { this.setVote("up"); },
   downVote: function() { this.setVote("down"); },
 
   setVote: function(voteType) {
      this.model.vote(App.currentUser.get('userName'), voteType);
	  this.render();
   }
 
});