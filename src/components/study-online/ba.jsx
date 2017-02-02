var React = require('react');
var Link = require('react-router').Link;

var BA = React.createClass({
  render: function() {
    return (
      <div className= "aboutus">
        <span className="title">Bachelor's (Hons) in Marketing (top-up)</span><br/><br/>
      <span className="description">       
        This Marketing honours degree programme is aimed at producing graduates who are 
        empowered with essential marketing tools and knowledge sought by employers in today’s
         dynamic global workplace. The BA (Hons) in Marketing (Top-up) is designed to give you
          a comprehensive understanding of the key skills and practices used by marketing executives
           and their organisations to make informed marketing decisions that are vital to the success
            of any business. The dqualification is awarded by Anglia Ruskin University via London 
            School of Marketing. You will learn how to critically evaluate key marketing models and 
            apply them to a real-life business problem at a strategic level by conducting your very 
            own research project.<br />

            <b>In addition , you will also receive:</b>
<ul>
<li>
Welcome webinar upon course commencement.</li>
<li>Online webinars for assignment/exam workshops.</li>
<li>Dedicated one-to-one tutor assigned to provide comprehensive support throughout the course.</li>
<li>One-to-one supervision for all Major Project modules.</li>
</ul>

      </span>

</div>
    );
  }
});

module.exports = BA;