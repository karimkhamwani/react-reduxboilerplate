var redux = require('redux');

console.log('Starting redux example');

var defaultState = {
  name : 'Anonymus'
}
var reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name : action.name
      }
      break;
    default:

  }
  return state;
}

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log("currentState is",currentState)

var action = {
  type :"CHANGE_NAME",
  name : "Karim"
}

store.dispatch(action)
console.log(store.getState())
