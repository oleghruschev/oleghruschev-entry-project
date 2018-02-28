const AppReviewsView = Backbone.View.extend({
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
        if (this.$('.textarea_reviews').val().length < 5) return this.$('.detail').removeClass("block_close");
        if (!this.$('input[name=rating]:checked').val()) return this.$('.rating_fault').removeClass("block_close");
        this.countComment ++;
        this.$('.reviews_submenu').html("отзывы " + "(" + this.countComment + ")");
        const view = new ReviewsView({model: review});
        this.$('#reviews_list').append(view.render().el);
        this.$('.detail').addClass("block_close");
        this.$('.rating_fault').addClass("block_close");
    },

    resetReviews: function () {
        this.$('.star-rating__input').prop('checked', false);
        this.$('.textarea_reviews').val("");
        this.$('.detail').addClass("block_close");
        this.$('.rating_fault').addClass("block_close");
    },

    appendReviews: function() {
        this.reviewsList.create({
            title: this.$('.textarea_reviews').val(),
            date: "Аноним, " + new Date().getHours() + ":" + new Date().getMinutes(),
        });

        const val = this.$('input[name=rating]:checked').val();

        (val == 1) ? $('.new_comment:last .one').addClass("display_rating") :
            (val == 2) ? $('.new_comment:last .twoo').addClass("display_rating") :
                (val == 3) ? $('.new_comment:last .three').addClass("display_rating") :
                    (val == 4) ? $('.new_comment:last .foo').addClass("display_rating") :
                        (val == 5) ? $('.new_comment:last .five').addClass("display_rating") :
                            this.$('.rating_fault').removeClass("block_close");

        if(this.$('.textarea_reviews').val().length >= 5) this.$('.star-rating__input').prop('checked', false);
        if(val !== undefined) this.$('.textarea_reviews').val('');
    }
});
