var React = require('react');
var Link = require('react-router').Link;

var Australia = React.createClass({
  render: function() {
    return (
      <div className= "aboutus">
        <div className="aus-photo">
        </div><br/>
        <span className="title">Study in Australia</span><br/><br/>
      <span className="description">       
        Colleges and University, Ample serves to you at Australia are:<br/>

        - Gurkhas Institute of Hospitality and Management<br/>
        - Hales Institute<br/>
        - Pacific College of Technology<br/>
        - Mackintosh International College<br/>
        - Nature Care College<br/>
        - HHH International college<br/>
        - CQ University<br/>
        <br/>
        Australia provides a unique kind of education and a learning style that encourages you
         to be innovative, creative and think independently. Australia attracts the third largest
          number of international students in the English-speaking world after the USA and UK. In 
          some countries Australia is the students' first choice study destination.<br/>

        Australia is a dynamic, vibrant country and its people are energetic, friendly and confident.
         Multicultural Australia is a safe, friendly, sophisticated and harmonious society in which 
         students can learn and travel in an English speaking country along with this tuition costs 
         in Australia are considerably less expensive than in the UK and USA.<br/>
      </span>

</div>
    );
  }
});

module.exports = Australia;