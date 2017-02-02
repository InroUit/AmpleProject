var React = require('react');
var Link = require('react-router').Link;

var FooterLinks = React.createClass({
  render: function() {
    return (
      <div className="footer-links-holder">
        <div className="footer-individual">
          <ul className="footer-list">
            Quick Links<br /><br />
            <li className="footer-link"><Link to="/contact-us">Apply now </Link></li>
            <li className="footer-link"><Link to="/toefl">TOEFL</Link></li>
            <li className="footer-link"><Link to="/ielts">IELTS</Link></li>
            <li className="footer-link"><Link to="/study-abroad">Study Abroad</Link></li>
            <li className="footer-link"><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>       
        <div className="footer-individual">
          <ul className="footer-list">
            Study In<br /><br />
            <li className="footer-link"><Link to="/uk">UK</Link></li>
            <li className="footer-link"><Link to="/usa">USA</Link></li>
            <li className="footer-link"><Link to="/canada">Canada</Link></li>
            <li className="footer-link"><Link to="/australia">Australia</Link></li>
            <li className="footer-link"><Link to="/newzealand">NewZealand</Link></li>
          </ul>
        </div>
        <div className="footer-individual">
          <ul className="footer-list">
            Contact Us<br /><br />
            <li className="footer-link">Nepal Office: +97714421257</li>
            <li className="footer-link">Uk Office: +44 (0)20 34909600</li>
            <li className="footer-link">Canada Office: __________</li>
            
          </ul>
        </div>          
      </div>
    );
  }
});

module.exports = FooterLinks;