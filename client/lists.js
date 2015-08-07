
Template.lists.helpers({
    items: _.map([
        { name: "foo", pet: "dog" },
        { name: "bar", pet: "cat" }
    ], function(v, i){
        v.index = i + 1;
        return v;
    })
});