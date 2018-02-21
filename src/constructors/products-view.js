const ProductsView = Backbone.View.extend({
    el: ".container",

    initialize: function () {
      this.listenTo(this.model, 'sync', this.renderProductInformation)
    },

    renderProductInformation: function (model) {
        this.$('.name_products').text(model.get("name"));


        if(model.get("trademark") == null) {
            model.set("trademark", "Не имеет марки");
            this.$('.trademark').text(model.get("trademark"));
        } else {
            this.$('.trademark').text(model.attributes.trademark.name);
        }

        this.$('.sid_products').text(model.get("sid"));

        if(model.get("certificate") == null || undefined) model.set("certificate", "Не подлежит сертификации");
        this.$('.certificate').text(model.get("certificate"));

        this.$('.country').text(model.attributes.country.name);

        this.$('.stuff').text(model.get("stuff"));

        if(model.get("series") == null || undefined) {
            model.set("series", "Не имеет серии");
            this.$('.series').text(model.get("series"));
        } else {
            this.$('.series').text(model.attributes.series.name);
        }



        this.$('.show_img').attr("src", model.get("img"));
    },
});