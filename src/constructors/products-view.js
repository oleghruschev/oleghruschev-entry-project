const productsModel = new ProductsModel({
    // name: "phone",
});

const ProductsView = Backbone.View.extend({
    el: ".container",

    model: productsModel,

    events: {
        "click .modal_btn" : "setName"
    },

    setName: function() {
        this.$('.name_products').text(this.model.get("name"));
        // this.$('.name_products').text($('.textarea').val());
    }
});
