var redux = require('redux');
var reducer = require('./redux-reducer')

var store = redux.createStore(reducer);
var currentState = store.getState();
console.log("currentState is",currentState)

module.exports = store
