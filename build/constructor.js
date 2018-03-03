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

const FormArticul = Backbone.View.extend({
    el: ".container",

    events: {
        "click .append_btn"      : "openForm",
        "click .close"           : "closeForm",
        "click .append_products" : "openProducts"
    },

    openForm: function() {
        this.$('.modal_wrap').removeClass("block_close");
        this.item = new ProductsModel();
        this.itemView = new ProductsView({
            model: this.item
        })
    },

    closeForm: function() {
        this.$('.modal_wrap').addClass("block_close");
    },

    openProducts: function() {
        this.$('.products_wrap').removeClass("block_close");
        this.$('.modal_wrap').addClass("block_close");
        this.item.updateUrl($('.textarea').val());
        this.item.fetch();
        this.$('.textarea').val("");
    }
});

const ReviewsModel = Backbone.Model.extend({
    defaults: {
        title: "new reviews",
        date: "new date",
    },
});

const ProductsModel = Backbone.Model.extend({
  baseUrl: 'https://www.sima-land.ru/api/v3/item/',

  updateUrl: function (id) {
      this.url = this.baseUrl + String(id) + '/'
  }
});

const ProductsView = Backbone.View.extend({
    el: ".container",


    events: {
        "click .reviews_submenu"        : "openReviews",
        "click .characteristic_submenu" : "openCharacteristic"
    },


    initialize: function () {
      this.listenTo(this.model, 'sync', this.renderProductInformation);
        this.template = _.template($('#product-template').html());
    },


    openReviews: function () {
        this.$('.characteristic').addClass("block_close");
        this.$('.reviews_wrap').removeClass("block_close");

        this.$('.characteristic_submenu').removeClass("active");
        this.$('.reviews_submenu').addClass("active");
    },

    openCharacteristic: function () {
        this.$('.characteristic').removeClass("block_close");
        this.$('.reviews_wrap').addClass("block_close");

        this.$('.characteristic_submenu').addClass("active");
        this.$('.reviews_submenu').removeClass("active");
    },


    renderProductInformation: function (model) {
        this.$('.products_wrap').html(
            this.template({
                name: model.get('name'),

                trademark: model.get('trademark') ? model.attributes.trademark.name : "Не имеет марки",

                sid_products: model.get('sid'),

                certificate: (model.get('certificate') == undefined) ? "Не подлежит сертификации" : model.get('certificate') ,

                country: model.attributes.country.name,

                stuff: model.get('stuff'),

                series: model.get('series') ? model.get('series') : "Не имеет серии",

                in_box: model.get("in_box") + ' ' + model.get("inBoxPluralNameFormat"),

                qty_rules: model.get("qty_rules"),

                packaging: (model.get('packaging') == undefined ) ? "Пакет" : model.get('packaging'),

                box_size: model.get("box_depth") + 'см x ' + model.get("box_width") + 'см x ' + model.get("box_height") + 'см',

                img: model.get('img')
            })
        )
    },
});

const ReviewsList = Backbone.Collection.extend({
  model: ReviewsModel,
  url: "none"
});

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
