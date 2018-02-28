describe("form-articul", function() {

    $('body').append(
        '<div class="container">' +
            '<button class="append_btn"></button>' +
            '<div class="modal_wrap">' +
                '<button class="append_products"></button>' +

            '</div>' +
            '<div class="products_wrap"></div>' +
                '<h1 class="name_products">Название товара</h1>' +
        '</div>'
    );

    const formArticul = new FormArticul();

    it("test", function() {
        expect(formArticul.el).toHaveClass('container');
    });

    it("open the form", function() {
        $('.append_btn').trigger('click');
        expect($('.modal_wrap')).not.toHaveClass('block_close');
    });


    it("close the form", function() {
        $('.close').trigger('click');
        $('.append_products').trigger('click');
        expect($('.modal_wrap')).toHaveClass('block_close');
    });

    it("open the products", function() {
        $('.append_products').trigger('click');
        expect($('.products_wrap')).not.toHaveClass('block_close');
    });

    it('reliable Url', function() {
        expect(formArticul.item.baseUrl).toEqual('https://www.sima-land.ru/api/v3/item/')
    });
    it("open the reviews", function() {
        expect($('.reviews_wrap')).not.toHaveClass('block_close');
        expect($('.characteristic')).not.toHaveClass('block_close');
    });
});
