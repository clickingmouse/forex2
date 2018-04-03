const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

/* Import Components */
const HelloWorld = require('./components/HelloWorld');
const About = require('./components/About');
const Forex = require('./components/Forex');

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Forex}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>), document.getElementById('main'));