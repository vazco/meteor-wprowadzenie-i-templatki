Colors = new Mongo.Collection('colors');

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
