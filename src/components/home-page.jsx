var React = require('react');
var Service = require('./ui_elements/image-title');
var Link = require('react-router').Link;

var Services =function(){
  return(
    <div className ="service-block">
      <span className="ourservices">Our Services</span><br/><br/><br/>
      <div className="services">
        <div className="service-holder">
          <Service link={"/study-abroad"} title={'Study Abroad'} class={'study-abroad-icon'}/>
        </div>
        <div className="service-holder">
          <Service link={"/test-preparation"} title={'Test Preparation'} class={'language'}/>
        </div>
        <div className="service-holder">
          <Service link={"/pr"} title={'PR/Greencard'} class={'greencard'}/>
        </div>
        <div className="service-holder">
          <Service link={"/study-online"} title={'Study online'} class={'study-online'}/>
        </div>
        <div className="service-holder">
        </div>
      </div>  
    </div>

  );
};

var Certificate = function(){
  return(
    <div className = "certificate-block">
      <div className= "ncoc"></div>
      <div className= "wh"></div>
      <div className= "iso"></div>
    </div>
    );
};

var Anita = function(){
  return(
    <div className = "testimonial-home">
    <div className = "remarks">
    <span className="main-text">
    "I was extremely pleased with the help provided by Ample Insitute.Pramod Sir helped me to get 
    USA multiple Visa so that I could stay in USA.I was staying in UK in work permit.But I was having diffuculties
    in settling myself up in UK and I was looking for better opportunity to move to another country. I
     am so happy for their last hour support from London Office. They are really good and very ethical genuine education agent." <br/>
    </span><br/>
    <span className="user-text">
    -&nbsp;Anita Khadka<br/>
    <br/>
    </span>
    </div>

    <div className = "photo"></div>
    </div>
    );
}

var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container1">
          <div className="big-text">
          	Want to study abroad?<br/>
          	We are here to help.
          </div>
          <hr />
          <div className="small-text">
          We provide IELTS and TOEFL classes from best teachers in the town.<br/>
          </div>
          <Link to="/aboutus"><button className="kmau">Know more about us</button></Link>      
        </div>
        <Link to = "/testimonials">
        <Anita />
        </Link>
        <Services />
        <Certificate />
      </div>
    );
  }
});

module.exports = HomePage;