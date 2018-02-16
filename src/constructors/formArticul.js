const FormArticul = Backbone.View.extend({
    el: ".container",

    events: {
        "click .append_btn" : "openForm",
        "click .close"      : "closeForm"
    },
    openForm: function() {
        this.$('.modal_wrap').css({
            'display' : 'block'
        });
    },
    closeForm: function() {
        this.$('.modal_wrap').css({
            'display' : 'none'
        });
    },
});
