var React = require('react');
var Link = require('react-router').Link;
var Photo = require('./ui_elements/gallery-photo');

var Gallery = React.createClass({
  render: function() {
    return (
      <div className= "gallery">
      <span className="title">Staffs and Students</span><br/><br/>
      <hr/>
      <div className="category">      
      <Photo height={"200px"} width={"300px"} url ={'http://res.cloudinary.com/instantum/image/upload/v1485942246/16473499_1277417105673224_3272505777601814510_n_hcerby.jpg'} />
      <Photo height={"200px"} width={"300px"} url ={'http://res.cloudinary.com/instantum/image/upload/v1485942243/16388053_1277417112339890_4366589430057475792_n_clheoc.jpg'} />
      <Photo height={"200px"} width={"300px"} url ={'http://res.cloudinary.com/instantum/image/upload/v1485942245/16406847_1277417059006562_8594465314633718623_n_k55kbx.jpg'} />
      <Photo height={"200px"} width={"300px"} url ={'http://res.cloudinary.com/instantum/image/upload/v1485942245/16427428_1277417075673227_4033632865027869726_n_df34wu.jpg'} />
      <Photo height={"200px"} width={"300px"} url ={'http://res.cloudinary.com/instantum/image/upload/v1485942246/16473499_1277417105673224_3272505777601814510_n_hcerby.jpg'} />
      <Photo height={"200px"} width={"300px"} url ={'http://res.cloudinary.com/instantum/image/upload/v1485942243/16406476_1277417152339886_1503432323506258852_n_h7msg4.jpg'} />
      </div>
      
      <span className="title">Extras</span><br/><br/>
      <hr/>
      <div className="category">
        <Photo height={"200px"} width={"300px"} url ={'http://res.cloudinary.com/instantum/image/upload/v1485942242/12662459_958445850903686_6439284757531892754_n_vukuke.jpg'} />
        <Photo height={"200px"} width={"300px"} url ={'http://res.cloudinary.com/instantum/image/upload/v1485942241/12289471_921356214612650_8735249518649326733_n_gsxdxi.jpg'} />
        <Photo height={"200px"} width={"300px"} url ={'http://res.cloudinary.com/instantum/image/upload/v1485942240/11218456_921356184612653_1933247441532517370_n_clh43v.jpg'} />
        <Photo height={"200px"} width={"300px"} url ={'http://res.cloudinary.com/instantum/image/upload/v1485942240/11218456_921356184612653_1933247441532517370_n_clh43v.jpg'} />
      </div>

</div>
    );
  }
});

module.exports = Gallery;