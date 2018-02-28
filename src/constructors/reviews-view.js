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

const AppView = Backbone.View.extend({
  el: $(".container"),

  events: {
      "click .cancel" : "resetReviews",
      "click .append_reviews" : "appendReviews"
  },

   initialize: function() {
      this.reviewsList = new ReviewsList();
      this.listenTo(this.reviewsList, 'add', this.addOne);
   },

   countComment: 0,

   addOne: function(review) {
      if (this.$('.textarea_reviews').val().length < 5) return this.$('.detail').removeClass("modal_close");
      if (!this.$('input[name=rating]:checked').val()) return this.$('.rating_fault').removeClass("modal_close");
      this.countComment ++;
      this.$('.reviews_a').html("отзывы " + "(" + this.countComment + ")");
      const view = new ReviewsView({model: review});
      this.$('#reviews_list').append(view.render().el);
      this.$('.detail').addClass("modal_close");
      this.$('.rating_fault').addClass("modal_close");
    },

    resetReviews: function () {
      this.$('.star-rating__input').prop('checked', false);
      this.$('.textarea_reviews').val("");
      this.$('.detail').addClass("modal_close");
      this.$('.rating_fault').addClass("modal_close");
    },

    appendReviews: function() {
      this.reviewsList.create({
          title: this.$('.textarea_reviews').val(),
          date: "Аноним, " + new Date().getHours() + ":" + new Date().getMinutes(),
      });

      const val = this.$('input[name=rating]:checked').val();

      (val == 1) ? $('.new_comment:last .one').addClass("my-class") :
        (val == 2) ? $('.new_comment:last .twoo').addClass("my-class") :
            (val == 3) ? $('.new_comment:last .three').addClass("my-class") :
                (val == 4) ? $('.new_comment:last .foo').addClass("my-class") :
                    (val == 5) ? $('.new_comment:last .five').addClass("my-class") : val == undefined;


      if(this.$('.textarea_reviews').val().length >= 5) this.$('.star-rating__input').prop('checked', false);
      if(val !== undefined) this.$('.textarea_reviews').val('');
    }
});