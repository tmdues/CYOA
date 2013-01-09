App.Collections.Questions = Backbone.Collection.extend({
    model: App.Models.Question,
    url: "/questions"
});