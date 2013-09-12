window.BackboneRails = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(params) {
      ENTER_KEY = 13;
      var things = new BackboneRails.Collections.Things(params.things);
      var thingsView = new BackboneRails.Views.Things(things);
      var thingsRouter = new BackboneRails.Routers.Things();
      Backbone.history.start();
    }
};

