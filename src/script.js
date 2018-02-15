
const Modal = Backbone.Model.extend({

});

$(document).ready(function(e) {
    $(".append_btn").click(function() {
        let modalShow = new ModalShow();
    });
    $(".close").click(function() {
        let modalClose = new ModalClose();
    })
});



const ModalShow = Backbone.View.extend({
    el: '.modal_wrap',
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.css({
            'display': 'block'
        });
    }
});

const ModalClose= Backbone.View.extend({
    el: '.modal_wrap',
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.css({
            'display': 'none'
        });
    }
});










