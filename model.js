$(document).ready(function () {


var Apparatus = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/ravenbb',
  idAttribute: "_id",
  defaults: {
    "steel": "trapeze",
    "fabric": "aerial silks"
  },
  initialize: function () {
    console.log("Apparatus model is created!");
  }
});


var apparatus1 = new Apparatus({"steel": "aerial hoop"});

apparatus1.save();

var Trips = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/ravenbb2',
  idAttribute: "_id",
  defaults: {
    "overseas": "Japan",
    "USA": "Kentucky"
  },
  initialize: function () {
    console.log("Trips model is created!");
  }
});

var trips1 = new Trips({"England": "London"});

trips1.save();


});
