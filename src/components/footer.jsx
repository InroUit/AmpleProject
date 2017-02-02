var React = require('react');
var Link = require('react-router').Link;

var FooterLinks = require('./footer-links.jsx');
var SocialLogo = require('./ui_elements/social-logo');
var Footer = React.createClass({
  render: function() {

    return (
      <div className="footer-container">
        <div className="content">          
            <div className="footer-logo"></div>
       <FooterLinks />
          <div className="logos">
            <span className="kit">Keep in Touch</span>
            <div className="social-logo-holder">
                <SocialLogo link={"/"} forclass={"social-facebook"}/>
                <SocialLogo link={"/"} forclass={"social-twitter"}/>
                <SocialLogo link={"/"} forclass={"social-googleplus"}/>
                <SocialLogo link={"/"} forclass={"social-linkedin"}/>
              </div>
          </div>     
          
        </div>
        
      </div>
    );
  }
});

module.exports = Footer;
