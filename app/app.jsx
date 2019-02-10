var React = require('react');
var ReactDOM = require('react-dom');

//<---------------------------------------------------------------->
var Main= require('Main');
var Countdown=require('Countdown');
var Timer = require('Timer');

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');
$(document).foundation();

var {Route,Router,IndexRoute,hashHistory} = require('react-router');
//<---------------------------------------------------------------->

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
      <Route path="/Countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
      </Route>
  </Router>,
    document.getElementById('app')
  );
//<---------------------------------------------------------------->