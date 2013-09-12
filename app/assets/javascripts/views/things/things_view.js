BackboneRails.Views.Things = Backbone.View.extend({
    el: '#thingmain',
    template: JST['things/things_template'],
    events: {
        'keypress #inputthingname': 'createThing'
    },
    initialize : function(things) {
        this.things = things;
        this.render();
        this.loadThings();
    },
    render : function() {
        $(this.el).html(this.template());
    },
    getInputValue : function() {
        return {
            name: this.$("#inputthingname").val().trim()
        }
    },
    createThing : function(e) {
        if (e.which === ENTER_KEY) {
            var value = this.getInputValue();
            if (value) {
                var newThing = new BackboneRails.Models.Thing(value);
                newThing.save();
                this.things.add(newThing);
                this.$("#inputthingname").val('');
                this.showCreatedThing(newThing);
            }
        }
    },
    showCreatedThing : function(thing) {
        var newThingView = new BackboneRails.Views.Thing({ model: thing });
        newThingView.render();
        $('#thingtable').append(newThingView.el);
    },
    loadThings : function() {
        $('#thingtable').html('');
        this.things.each(function(thing) {
            this.showCreatedThing(thing);
        }, this);
    }
});
