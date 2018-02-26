const ReviewsView = Backbone.View.extend({
  tagName: "div",

  template: _.template($("#reviews-template").html()),

  initialize: function() {
      this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this
  }
});

const reviewsList = new ReviewsList();

const AppView = Backbone.View.extend({
  el: $(".container"),

  events: {
      "click .cancel" : "cancelReviews",
      "click .append_reviews" : "appendReviews"

  },

   initialize: function() {
      reviewsList.on('add', this.addOne, this);
   },

   countComment: 0,

   addOne: function(reviews) {
      if (!this.$('.textarea_reviews').val()) return;
      this.countComment ++;
      this.$('.reviews_a').html("отзывы " + "(" + this.countComment + ")");
      const view = new ReviewsView({model: reviews});
      this.$('#reviews_list').append(view.render().el);

    },

    cancelReviews: function () {
         this.$('.textarea_reviews').val("")
    },

    appendReviews: function() {
      reviewsList.create({
          title: this.$('.textarea_reviews').val(),
          date: "Аноним, " + new Date().getHours() + ":" + new Date().getMinutes(),
          stars: this.$('.star-rating').html()
      });
      this.$('.textarea_reviews').val("")
    }
});
