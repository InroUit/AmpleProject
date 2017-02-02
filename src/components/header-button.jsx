var React = require('react');
var Link = require('react-router').Link;

var HeaderButton = React.createClass({
  render: function() {

    return (
      <Link to="/" + {this.props.link}>
      <button className= "header-button">
               
        {this.props.title}
        
      </button>
      </Link>
    );
  }
});

module.exports = HeaderButton;
