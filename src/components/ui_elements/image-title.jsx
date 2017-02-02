var React = require('react');
var Link = require('react-router').Link;

var Service = React.createClass({
  render: function() {    
    return(  
      <Link to={this.props.link} >      	
      	<div className={this.props.class}></div>
      	<span className={this.props.class2}>{this.props.title}</span>      	
      </Link>        
    );
  }
});

module.exports = Service;