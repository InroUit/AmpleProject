var React = require('react');
var Link = require('react-router').Link;
var Help = require('./ui_elements/image-title');
var PR = React.createClass({
  render: function() {

    return (
      <div className= "aboutus">
       <span className="title">Permanent Resident / Greencard Application</span><br/><br/>
 <span className="description">       
We assist individuals and their families to immigrate to Canada and apply for Denmark Greencard. We are one of the best in the service industry, providing immigration assistance to people across the globe. Head Quartered in London, we have our offices in Vancouver, Canada and Dillibazar, Kathmandu Nepal. Ample International Education is led by The Professional team of Pramod Adhikari, an experienced immigration consultant who has experience of 10 years in this sector.<br/>

*** Ample’s Services brings knowledgeable and accountable professionals to serve you. ***
<br/><br/>
We help you for: <br/>
</span>
<div className='language-holder'>
<div className="service-holder2">
			<Help link={"/cee"} title={'Canada Express Entry'} class={'canada'} />
		</div>     
<div className="service-holder2">
			<Help link={"/dg"} title={'Denmark Greencard'} class={'denmark'} />
		</div>
<div className="service-holder2">
			<Help link={"/awp"} title={'Australia Work Permit'} class={'australia'} />
		</div>
		 </div>
		 </div>

    );
  }
});

module.exports = PR;