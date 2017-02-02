var React = require('react');
var Link = require('react-router').Link;
var Test = require('./ui_elements/image-title');

var StudyAbroad = React.createClass({
  render: function() {

    return (
      <div className= "aboutus">
       <span className="title">Test Preparation</span><br/><br/>
 <span className="description">      
Recently, ample is running IELTS & TOEFL and SAT, GRE, GMAT are on progress. We are offering the IELTS & TOEFL class on flexible time table as student demand with experienced teacher and visiting foreign teacher.
<br />
<br />
</span>
	<div className='language-holder'>
		<div className="service-holder2">
			<Test link={"/ielts"} title={'IELTS'} class={'ielts'} class2={'country-name'}/>
		</div>
		<div className="service-holder2">
			<Test link={"/toefl"} title={'TOEFL'} class={'toefl'} class2={'country-name'}/>
		</div>
	</div>
</div>
    );
  }
});

module.exports = StudyAbroad;