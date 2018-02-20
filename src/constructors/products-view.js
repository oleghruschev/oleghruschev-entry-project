const ProductsView = Backbone.View.extend({
    el: ".container",

    initialize: function () {
      this.listenTo(this.model, 'sync', this.renderHeadline)
    },

    renderHeadline: function (model) {
        this.$('.name_products').text(model.get("name"));
    }
});
