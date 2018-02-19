const FormArticul = Backbone.View.extend({
    el: ".container",

    events: {
        "click .append_btn" : "openForm",
        "click .close"      : "closeForm",
        "click .modal_btn" : "openProducts"
    },
    openForm: function() {
        this.$('.modal_wrap').removeClass("modal_close");
    },
    closeForm: function() {
        this.$('.modal_wrap').addClass("modal_close");
    },
    openProducts: function() {
      this.$('.products_wrap').removeClass("modal_close");
      // this.$('.modal_wrap').addClass("modal_close");
      // this.$('.append_btn').addClass("modal_close");
    }
});
