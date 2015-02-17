$(document).ready(function () {

var Apparatus = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/ravenbb',
  model: Apparatus
});

var Trips = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/ravenbb2',
  model: Trips
});

});
