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

module.exports = reducer
