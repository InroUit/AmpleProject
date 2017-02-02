var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
  render: function() {

    return (
      <div className= "header">
      <Link to="/">
      <span className ="title-logo"> ample </span>
      <span className ="title-logo2"> International Education</span>
      </Link>
        <div className="header-links">

        	<button className="link"><Link to="/aboutus">About Us</Link></button>
        	<button className="link"><Link to="/gallery">Gallery</Link></button>
        	<button className="link"><Link to="/contact-us">Contact</Link></button>
        </div>
      </div>
    );
  }
});

module.exports = Header;
