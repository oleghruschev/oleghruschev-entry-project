describe('reviews-list', function () {

    const list = new ReviewsList();

    it("adding models", function () {
        expect(list.length).toBe(0);

        list.add([
            {title: "one title"},
            {title: "two title"}
        ]);

        expect(list.length).toBe(2)

    })

});
