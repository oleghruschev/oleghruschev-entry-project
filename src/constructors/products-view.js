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
