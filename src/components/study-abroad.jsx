var React = require('react');
var Link = require('react-router').Link;
var Country = require('./ui_elements/image-title');

var StudyAbroad = React.createClass({
  render: function() {

    return (
      <div className= "aboutus">
       <span className="title">Study Abroad</span><br/><br/>
 <span className="description">      
Ample has it's smooth network with highly reputed college and university around the world.
Varieties of academic and professional courses are of your choice is the merits of study abroad program of ample.
Features:<br/> 

- Highly reputed colleges and universities.<br/> 
- Worldwide accepted degree.<br/> 
- Subject of your choice.<br/> 
- Perfect pathway for qualified manpower.<br/> 
<br/> 
<b>Countries we serve you are: </b>
<br/><br/>
</span>
<div className="service-holder2">
	<Country link={"/australia"} title={'Australia'} class={'australia'} class2={'country-name'}/>
</div>
<div className="service-holder2">
	<Country link={"/usa"} title={'USA'} class={'usa'} class2={'country-name'}/>
</div>
<div className="service-holder2">
	<Country link={"/uk"} title={'UK'} class={'uk'} class2={'country-name'}/>
</div>
<div className="service-holder2">
	<Country link={"/canada"} title={'Canada'} class={'canada'} class2={'country-name'}/>
</div>
<div className="service-holder2">
	<Country link={"/newzealand"} title={'Newzealand'} class={'newzealand'} class2={'country-name'}/>
</div>
</div>
    );
  }
});

module.exports = StudyAbroad;