rvar = new RVar();

Template.clock.onCreated(function() {
    this.clock = new ReactiveClock('ExerciseClock');
});

Template.clock.onRendered(function() {

    this.clock.start();
});

Template.clock.onDestroyed(function() {
    this.clock.stop();
});

Template.clock.helpers({
    getClock: function(){
        var instance = Template.instance();
        return instance.clock && instance.clock.elapsedTime({format: '00:00:00'})
    }
});

Template.hello.helpers({
    counter: function () {
        return this.counter || 0;
    },
    items: function(){
        return Colors.find();
    }

});

Template.hello.events({
    'click button': function (e) {
        e.stopPropagation();
        // increment the counter when button is clicked
        Colors.update(this._id, {$inc: {counter: 1}});
    },
    'submit': function(e, tmpl){
        var el = tmpl.$('.js-name');
        var value = el.val();
        el.val('');
        Colors.insert({name: value, counter: 0});
        e.stopPropagation();
        return false;
    }
});

//
//Tracker.autorun(function(c){
//    if(rvar.get() > 6){
//        c.stop();
//    }
//    console.log('Wartość', rvar.get());
//});


var fn = function(i){
    Meteor.setTimeout(function(){
        rvar.set(i);
    }, 1000 * i);
};

for(var j = 0; j <10; j++){
    fn(j);
}