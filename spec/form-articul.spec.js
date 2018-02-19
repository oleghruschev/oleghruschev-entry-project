describe("form-articul", function() {

    $('body').append(
        '<div class="container">' +
            '<div class="modal_wrap"><span class="close"></span></div>' +
        '</div>'
    );

    const formArticul = new FormArticul();

    it("test", function() {
        expect(formArticul.el).toHaveClass('container');
    });

    it("open the form", function() {
        $('.append_btn').trigger('click');
        expect($('.modal_wrap')).not.toHaveClass('modal_close');
    });

    it("close the form", function() {
        $('.close').trigger('click');
        expect($('.modal_wrap')).toHaveClass('modal_close');
    });
});
