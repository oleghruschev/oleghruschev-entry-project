describe("form-articul", function() {

    $('body').append('<div class="container"></div>');

    const formArticul = new FormArticul();

    it("test", function() {
        expect(formArticul.el.classList).toEqual(jasmine.arrayContaining(["container"]));
    });
});
