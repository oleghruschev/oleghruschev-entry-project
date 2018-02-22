const ProductsView = Backbone.View.extend({
    el: ".container",

    initialize: function () {
      this.listenTo(this.model, 'sync', this.renderProductInformation);
        this.template = _.template($('#product-template').html());
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

                box_size: model.get("box_depth") + 'см x ' + model.get("box_width") + 'см x ' + model.get("box_height") + 'см',


                img: model.get('img')
            })
        )
    },
});