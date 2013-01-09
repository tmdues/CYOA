App.Models.Question = Backbone.Model.extend({
   defaults: {
      votes: []
   },
    constrain: function(value, min, max) {
      if(value < min) return min;
      if(value > max) return max;
      return value;
    },
 
   getExistingVote: function(userName) {
      return _(this.get('votes')).find(function(vote) {
         return vote.voter == userName;
      });
   },
   
   vote: function(userName, voteType) {
      var voteValue = voteType === 'up' ? 1 : -1;
      var existingVote = this.getExistingVote(userName);
 
      if(existingVote) {
         existingVote.value = this.constrain(existingVote.value + voteValue, -1, 1);
      } else {
         this.get('votes').push({ value: voteValue, voter: userName });
      }
 
      this.save();
   },
   
      voteTally: function() {
      return this.get('votes').reduce( function(tally, vote) {
         return tally + vote.value;
      }, 0 );
   },
   
     didUserVote: function(userName, voteValue) {
      var vote = this.getExistingVote(userName);
      return !!(vote && vote.value == voteValue);
   },
 
   didUserVoteUp:   function(userName) { return this.didUserVote(userName, 1);  },
   didUserVoteDown: function(userName) { return this.didUserVote(userName, -1); }
 
});