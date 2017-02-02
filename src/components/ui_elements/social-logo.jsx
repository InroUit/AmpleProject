var React = require('react');
var Link = require('react-router').Link;

var SocialLogo = React.createClass({
  render: function() {    
    sociallogo = <img className={this.props.forclass} src={this.props.src}/>;    
    return (        
      <Link to={this.props.link} >{sociallogo}</Link>        
    );
  }
});

module.exports = SocialLogo;