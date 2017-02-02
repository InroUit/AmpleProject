var React = require('react');
var Link = require('react-router').Link;

var Canada = React.createClass({
  render: function() {
    return (
      <div className= "aboutus">
        <span className="title">Australia Work permit</span><br/><br/>
      <span className="description">       
        Australia is an extremely popular destination for highly skilled young people wishing to 
        start a new life in another country.
         The country's economy is strong and Australia is actively encouraging the immigration of
        skilled migrants. Skilled migrants wishing to work in Australia will be assessed on
         appoints with points awarded for work experience, qualifications and language proficiency.
          Other ways of obtaining immigration visas to Australia include the Australian Family 
          Migration and Humanitarian Programs. Australia's Migration Program for 2007-2008 provides
           for up to 152,800 places, with 102,500 of those under skilled migration - such as the 
              Australian Skilled Independent visa. If you would like to assess your own chances of 
            gaining a permanent residency visa for Australia, based on the General Skilled Migration 
            points system for offshore visas, then please contact us to complete the form and your 
            points score will be calculated for you. Please email us your bio data would be the quickest
             way to get the reply and assessment result, Please don’t forget mention your IELTS score 
             in your bio-data. Afterwards, if you have further questions that you wish to ask an Australian
              immigration consultant regarding the points test, please fill out our enquiry form or set up
               a face-to-face consultation by calling us in one of our office nearest of your location.<br/><br/>

For further information on the points system and the basic requirements for migrating to Australia,
 please see the section on <Link to="/australia">Australia</Link> on our website. 
 Please note that the current pass mark as of July 1st, 2017 is 65 points.<br/><br/>

<b>Lawyer Name:</b> Maryann Young<br/><br/>

<b>MARN:</b> 0318541<br/><br/>

For further reference follow the link<br/><br/>

<Link to= "https://www.mara.gov.au/media/95420/Code_of_Conduct.pdf">https://www.mara.gov.au/media/95420/Code_of_Conduct.pdf</Link><br/><br/>

<b>Contact US for more details.</b><br/><br/>
      </span>

</div>
    );
  }
});

module.exports = Canada;