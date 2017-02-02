var React = require('react');
var Link = require('react-router').Link;


var Service = React.createClass({
  render: function() {    
    return(  
      <div className="individual-testimonial">
        <div className="testimonial-image-holder">
          <img className="testimonial-image" src={this.props.image}/>
        </div>
        <div className ="testimonial-description">
          <b>Remarks :</b>{this.props.description} 
          <br/>
          <b>Serivce taken :</b> {this.props.service}<br/>
          <b>Currently living :</b> {this.props.current}<br/>
          <b>In Nepal :</b> {this.props.from}<br/>
            
          <span className="name">   
          Name:  {this.props.name}  
          </span>      
        </div>
      </div>   
    );
  }
});

module.exports = Service;