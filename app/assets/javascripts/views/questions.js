App.Views.Questions = Backbone.View.extend({
 
   initialize: function() {
   this.model.on("reset", this.render, this);
        this.model.on("add", this.renderItem, this);
   },
 
   render: function() {
           this.$el.html("");
        this.model.each(this.renderItem, this);
        return this;
   },
 
   renderItem: function(item) {
        var newView = new App.Views.Question({model: item});
        this.$el.append(newView.render().el);
   }
 
});