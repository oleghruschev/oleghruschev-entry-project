describe('reviews-view', function () {
    var instance,
        createInstance = function () {
            return new ReviewsView({
                model: new ReviewsModel
            })
        };

    it('should run the render', function () {
        spyOn(ReviewsView.prototype, 'render');
        instance = createInstance();
        instance.model.trigger('change');
        expect(instance.render).toHaveBeenCalledTimes(1);

    });

    it('reviewsView', function () {
        expect(instance.tagName).toBe("div");
    });

});

describe('app-reviews-view', function () {
    var instance,
        createInstance = function () {
            return new AppReviewsView()
        };


    it('should run the render', function () {
        spyOn(AppReviewsView.prototype, 'addOne');
        instance = createInstance();
        reviewsList.trigger('add');
        expect(instance.addOne).toHaveBeenCalledTimes(1);

    });

    it('count comment', function () {
        expect(instance.countComment).toBe(0);

        instance.countComment ++

        expect(instance.countComment).toBe(1);
    });
});
