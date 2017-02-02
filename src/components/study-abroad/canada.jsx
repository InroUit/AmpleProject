var React = require('react');
var Link = require('react-router').Link;

var Canada = React.createClass({
  render: function() {
    return (
      <div className= "aboutus">
      <div className="canada-photo">
        </div><br/>
        <span className="title">Study in Canada</span><br/><br/>
      <span className="description">       
        Colleges and University, Ample serves to you at Canada are: <br />

        - Okanagan College British Columbia<br />
        - George Brown The toronto city college<br />
        - University of Guelph Ridgetown College<br />
        - Northern Lights College<br />
        <br />
        Canada is the second largest country of the world providing quality education accepted all 
        around the world. The main reason to choose the Canada as the destination are:<br />

        - UN recognized the Canada as the best place to live.<br />
        - Education is accepted and recognized all over the world.<br />
        - Politically stable and safe country and multicultural country.<br />
        - Affordable fee for study and easy job opportunities.<br />
        <br />
      </span>

</div>
    );
  }
});

module.exports = Canada;