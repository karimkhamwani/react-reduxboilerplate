var React = require('react')
var store = require('../redux-store')

var Homepage = React.createClass({
  componentDidMount : function () {
    console.log("Homepage mounted")
    var action = {
      type :"CHANGE_NAME",
      name : "Karim"
    }

    store.dispatch(action)
    console.log(store.getState())
  },
  render : function () {
    return (
      <div>Hello from homepage </div>
    )
  }
})


module.exports = Homepage
