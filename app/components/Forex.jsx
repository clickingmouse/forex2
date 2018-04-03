//import React, {Component} from 'react';
const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');

const dependenciesArray = [
  'express - middleware for the node server',
  'react - for generating the views of the app',
  'react-dom - powers the rendering of elements to the DOM, typically paired with React',
  'webpack - for bundling all the javascript',
  'webpack-cli - command line support for webpack',
  'jsx-loader - allows webpack to load jsx files',
  'react-router-dom - handles routing!',
];

const componentsMade = [
  'HelloWorld - which is the view you are seeing now',
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
  'About - text content to show when "about" route is accessed',
];



/* the main page for the index route of this app */
class Forex extends React.Component {
  constructor(props){
  super(props);
    this.state={
    currencies:{}
    }
  };
  //get currency list
componentDidMount(){
  console.log('loading currencies...');
fetch('/currencies')
  .then(res=>res.json())
.then(currencies => this.setState({currencies}, ()=> console.log('Currencies fetched...',currencies)))
console.log('loaded currencies', this.state.currencies);
  console.log('load currencies complete');
}//CDM
  
  render(){
  return (
    <div>
      <h1>Historical Forex</h1>

      <Link to='/about'>About me!</Link>

      <p>Please select base currence and historical date</p>

      <UnorderedList items={dependenciesArray} />

      <p>Look in <code>app/components/</code> for {componentsMade.length} example components:</p>

      <UnorderedList items={componentsMade} />

    </div>
  );
}
}
module.exports = Forex;