var React = require('react');
var Link = require('react-router').Link;

var Footer = require('./footer.jsx');
var Header = require('./header.jsx');

var Main = React.createClass({
  render: function() {

    return (
      <span>
      	<Header />
      	<div className="body-content">
        
        {this.props.children}
        </div>

        <Footer />
        <hr/>
        <br/>
        <center>© Copyright 2016. All Right Reserved. Instantum </center>
      </span>
    );
  }
});

module.exports = Main;
