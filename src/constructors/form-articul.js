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
