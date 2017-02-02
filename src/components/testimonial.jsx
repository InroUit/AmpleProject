var React = require('react');
var Link = require('react-router').Link;
var TestimonialIndi = require('./testimonial-individual');

var Service = React.createClass({
  render: function() {    
    return( 
      <div className="testimonial">
      <span className = "title">Testimonial</span>
      	<TestimonialIndi service={'University Admission for Bachelor '} current={''} name={'Rabin Gurung'} from={'Butwal, Rupandehi'} image={'https://scufgaming.com/s/wp-content/uploads/bb-plugin/cache/Attach-circle.png'} description ={'i am very happy for ample.and i am proud for ample.i am very happy for ample.and i am proud for ample.i am very happy for ample.and i am proud for ample.i am very happy for ample.and i am proud for ample.i am very happy for ample.and i am proud for ample'} />
      	<TestimonialIndi service={'Uk University admission for master and Denmark Green card – PR granted for Denmark '} current={'Denmark'} name={'Alias Parayil George'} from={'Kerala'} image={'http://timesofindia.indiatimes.com/photo/46356661.cms'} description ={'i am very happy for ample'} />
      	<TestimonialIndi service={'UK University admission for Bachelor in Nursing'} current={'UK'}name={'Susmita Dangal'} from={'Jhapa'} image={'https://s-media-cache-ak0.pinimg.com/736x/68/d7/af/68d7afd75e7d1ebc93af612a648d85b6.jpg'} description ={'i am very happy for ample'} />
      	<TestimonialIndi service={'USA F1/F2  5 years Multiple visa Granted , University admission in USA'} current={'USA'}name={'Gaurab Bohara'} from={'Dhangadhi, Kailali'} image={"https://s-media-cache-ak0.pinimg.com/736x/8f/57/f8/8f57f8f5b6a3d91fffdec9c39c29d4c8.jpg"} description ={'i am very happy for ample'} />
      	<TestimonialIndi service={'UK Universities admission for Master in 2014/15 and DBA in 2015. '} current={'UK'}name={'Pramod Thapa'} from={'Lalitpur'} image={'http://b-i.forbesimg.com/bruceupbin/files/2013/03/Chris-300x300.jpg'} description ={'i am very happy for ample'} />
      	<TestimonialIndi service={'UK visa extension 2013 and 2015, admission in Universities for Bachelor and Master, career guide and counselling'} current={'UK'}name={'Sushila Bhattarai ( Including Family)'} from={'Palpa and  Kathmandu'} image={'http://www.healthcentral.com/sites/www.healthcentral.com/files/confused%20think%20brain.jpg'} description ={'i am very happy for ample'} />  
      </div> 
    );
  }
});

module.exports = Service;