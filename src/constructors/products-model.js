const ProductsModel = Backbone.Model.extend({
  baseUrl: 'https://www.sima-land.ru/api/v3/item/',

  updateUrl: function (id) {
      this.url = this.baseUrl + String(id) + '/'
  }
});
