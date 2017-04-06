var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Homepage = require('./components/Homepage')

//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Homepage />,
  document.getElementById('app')
);

//require('./redux-example.jsx');
require('./redux-store.jsx')
