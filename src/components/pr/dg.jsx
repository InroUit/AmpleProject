var React = require('react');
var Link = require('react-router').Link;

var DG = React.createClass({
  render: function() {
    return (
      <div className= "aboutus">
        <span className="title">Denmark Greencard Scheme</span><br/><br/>
      <span className="description">       
        You can be granted a residence permit to look for a work and live in denmark under this scheme. A residence permit and work permit is issued on the basis of individual evaluation on a point based system.<br/>
You are not required to obtain a seperate work permit, if you are granted a visa under a Greencard Scheme. This visa allow you to carry out any paid or unpaid work however you can not work as a self employed person (to run your own business).<br/><br/>

<b>Important Information:</b>
<ui>
   <li> In order to be granted a residence permit under the greencard scheme, you must obtain a minimum of 100 points. Points are given for: educational level, language skills and adaptability.</li>

    <li>The points in the Greencard scheme are given on the basis of objective criteria used to assess whether applicants are generally suited to apply for highly qualified jobs in Denmark. Getting a residence permit under the Greencard scheme is not the same at getting a job. It is entirely your own responsibility to find a job in Denmark so you can support yourself.</li>

   <li> You can be granted a first-time residence permit under the Greencard scheme for up to two years. Before the end of this period, you can apply for an extension of up to three years.</li>

    <li>You must document that you are able to support yourself during your first year in Denmark.</li>

    <li>If you are granted a residence permit, it is also a requirement that in the first year you have earned a minimum of DKK 50,000(GBP £5000) in Denmark. If not, your residence permit may be revoked.</li>
</ui>
      </span>

</div>
    );
  }
});

module.exports = DG;