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
        this.$('.characteristic').addClass("modal_close");
        this.$('.reviews_wrap').removeClass("modal_close");

        this.$('.characteristic_submenu').removeAttr('id');
        this.$('.reviews_submenu').attr('id', 'active');
    },

    openCharacteristic: function () {
        this.$('.characteristic').removeClass("modal_close");
        this.$('.reviews_wrap').addClass("modal_close");

        this.$('.characteristic_submenu').attr('id', 'active');
        this.$('.reviews_submenu').removeAttr('id');
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
