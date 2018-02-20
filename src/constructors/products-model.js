const ProductsModel = Backbone.Model.extend({
  defaults: {
    name: "name_products",
    characteristic: "info",
    photoURL: " "
  },

  baseUrl: 'https://www.sima-land.ru/api/v3/item/',
    url: 'https://www.sima-land.ru/api/v3/item/',

  updateUrl: function (id) {
      this.url = this.baseUrl + String(id) + '/'
  }
});
