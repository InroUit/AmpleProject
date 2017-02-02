var React = require('react');
var Link = require('react-router').Link;

var CEE = React.createClass({
  render: function() {
    return (
      <div className= "aboutus">
        <span className="title">Canada Express Entry</span><br/><br/>
      <span className="description">       
        The Government of Canada is committed to strengthening the immigration system to make it truly proactive, targeted, fast and efficient in a way that will sustain Canada’s economic growth and deliver prosperity for the future. The 2015 immigration plan unveiled by the government of Canada sets a target of between 260,000 and 285,000 new permanent residents next year, an increase of about 20,000 people from the goal for 2014.<br/><br/>
<b>Highlights of the program.</b>
<ul>
    <li>No Eligible Occupations List. Anyone meeting the eligibility criteria may apply.</li>
    <li>Applicants meeting the eligible criteria will be entered into the “Express Entry Pool”</li>
    <li>Human Capital Points - 600 Max (Points for Education /IELTS /W Exp. /Age)</li>
    <li>Those with Job Offer/Nominated by a Province will get 600 Extra Points.</li>
    <li>Points will also be awarded for Spouse Criteria</li>
    <li>CIC sends letters of invitations for PR, to selected candidates EVERY TWO WEEKS.</li>
    <li>Those who receive Letter of Invitation to apply for PR will require submitting their application in 60 days.</li>
    <li>Your profile will be valid for 12 months. During that time, applicants will get a chance to improve their points/rating by updating their profile if circumstances change, such as level of education or language test results.</li>
    <li>80% of the applications will be processed in 4 – 6 months.</li>
</ul>
<b>What we do for you??</b>
<br/>
<ul>
<li>1. Create your Profile with CIC.</li>
<li>2. Enhance your resume. </li>
<li>3. Create an account for you with the ESDC Job Bank.</li>
<li>4. Solicit your profile to employers across Canada.</li>
<li>5. Assist you with preparation of your application and submit your application to CIC in a timely manner (with in the 60 day period).</li>
<li>6. Represent you with CIC; follow up; guide and assist you till you get your PR.</li>
</ul>
      </span>

</div>
    );
  }
});

module.exports = CEE;