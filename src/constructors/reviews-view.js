const ReviewsView = Backbone.View.extend ({

    el: ".container",

    events: {
        "click .cancel" : "canselReviews",
        "click .append_reviews" : "appendReviews"

    },

    canselReviews: function () {
        this.$('.textarea_reviews').val("")
    },

    appendReviews: function () {
       //
    },
});

