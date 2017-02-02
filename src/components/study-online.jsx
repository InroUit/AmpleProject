var React = require('react');
var Link = require('react-router').Link;
var Help = require('./ui_elements/image-title');
var PR = React.createClass({
  render: function() {

    return (
      <div className= "aboutus">
       <span className="title">Study Online</span><br/><br/>
 <span className="description">       
Study online to get the british degree. Study at your own time and pace. We enroll you to the different UK university online.<br/><br/>

Why study Online?<br/>

-Study at your own time to suit your lifestyle.<br/>
-Bring Parents/Partner to celebrate your sucess together on your Graduation.<br/>
-Apply for Tier-2 work permit after completion of your course*.<br/>
-SELT Exemptions on further UK visa extensions in any category.<br/>
-Further Job Opportunity and alternatives available based on the student Academic Progression.<br/><br/>
Apply for PR for Canada and Denmark*<br/>

<br/>
<b>These are the courses we offer:</b><br/>
</span>
<div className='language-holder'>
<div className="service-holder2">
			<Help link={"/ma"} title={'MA'} class={'ma'} class2={'country-name'}/>
		</div>     
<div className="service-holder2">
			<Help link={"/mba"} title={'MBA'} class={'mba'} class2={'country-name'}/>
		</div>
<div className="service-holder2">
			<Help link={"/ba"} title={'BA(Hons)-TopUp'} class={'ba'} />
		</div>
		 </div>
		 </div>
    );
  }
});

module.exports = PR;