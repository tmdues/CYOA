App.Models.User = Backbone.Model.extend({
 
   logIn: function(userName) {
     if(!userName) return;
     this.set("userName", userName);
   },
 
   isLoggedIn: function() {
     return this.has('userName');
   },
        
});