const ReviewsView = Backbone.View.extend({
  tagName: "div",

  template: _.template($("#reviews-template").html()),


  initialize: function() {
      this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this
  },
});
