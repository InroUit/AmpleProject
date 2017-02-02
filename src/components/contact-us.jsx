var React = require('react');
var Link = require('react-router').Link;

var Photo = React.createClass({
  render: function() {
  	return (
      <div>
      <div className="contact-photo">
        </div>
      <div className="contact-btn-holder">
      	<button className="btn-class">Nepal office <br/>
    Post Box No 20401, Dillibazar<br/>
    Opposite of Padma Kanya HSS<br/>
    Kathmandu, Nepal<br/>
    Tel: +97714421257, 9851184081 <br/>
    E-mail: _________ </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


    <button className="btn-class"> UK office<br/>

32-34 Hare Street, Woolwich &nbsp;&nbsp;&nbsp;&nbsp;<br/>
London ,SE18 6LZ<br/>
United Kingdom<br/>
Tel: +44 (0)20 34909600<br/>
E-mail: _________<br/>

</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <button className="btn-class"> Canada office<br/>
14-3088 Airey Drive<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Richmond, V5Z 4A3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
Canada<br/>
E-mail: ___________<br/><br/>

</button>
      </div>
      </div>
    );
  }
});

module.exports = Photo;



