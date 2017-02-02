var React = require('react');
var Link = require('react-router').Link;

var Photo = React.createClass({
  render: function() {
  	var divStyle = {
  		height : this.props.height,
  		width : this.props.width,  		
  		content : 'url(' +this.props.url + ')'
  	};
    return (
      <div className= "photo" style={divStyle}>
      </div>
    );
  }
});

module.exports = Photo;