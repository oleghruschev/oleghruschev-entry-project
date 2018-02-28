describe('products-view', function () {
    var instance,
        createInstance = function () {
            return new ProductsView({
                model: new ProductsModel
            })
        };

    it('should render headline on model sync', function () {
        spyOn(ProductsView.prototype, 'renderProductInformation');
        instance = createInstance();
        instance.model.trigger('sync');
        expect(instance.renderProductInformation).toHaveBeenCalledTimes(1);

    });

    it('call the updateUrl', function() {
        spyOn(ProductsModel.prototype, 'updateUrl');
        instance = createInstance();
        $('.append_products').trigger('click');
        expect(instance.model.updateUrl).toHaveBeenCalledTimes(1);
    });

    it('call the fetch', function() {
        spyOn(ProductsModel.prototype, 'fetch');
        instance = createInstance();
        $('.append_products').trigger('click');
        expect(instance.model.fetch).toHaveBeenCalled();
    });

});
