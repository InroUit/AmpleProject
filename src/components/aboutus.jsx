var React = require('react');

var Welcome = function(){
  return(
  	<div>
  		<span className="title">Welcome to ample International </span><br/><br/>
<span className="description">Commence on 2009 A.D, Ample International Education is fully accredited company registered at
 England and Wales and recognized by the Government of Nepal with a mission to impart its best 
 quality counselling service for abroad study for better performance of Nepali student in the 
 foreign land for global education.<br/>

"A Complete way for Global Education for Global Competition", with the vary motto Ample 
International Education offers quality counselling and guiding them to secure the perfect future 
of student. "Success of our student is our Commitment." Ample is located at the heart United kingdom, London, and Branch offices at Dillibazar 
Kathmandu, Nepal and Canada assuming the focal point for student for counselling for foreign 
country and pathway for opportunity of high quality academic degree all around the world. Ample is the complete gateway for international education. Ample welcomes students who wish 
to study abroad on different countries all over the world. Counselling with ample expert counsellor 
can be the great experience on your personal as well as intellectual level. Our quality counselling 
surely aids you to compete in this era of globalisation where world is merged into a small village 
called 'global village' and we proudly note you that we can be the best guide to roam the global 
village with better career.

It's you to dream for global education and you will find the ample that can make dream happen. 
</span><br/><br/>
  	</div>
  );
};

var Why = function(){
  return(
  	<div>
  	<span className="title">Why Ample? </span><br/> <br/>               
                    	<span className="description">Reason to Choose the ample<br/>
- Quality personnel counselling.<br/>
- Latest and complementary text books/CDs and reference book for Test Preparation.<br/>
- Well equipped computer lab for IELTS/TOEFL and high speed internet.<br/>
- Experienced faculty for test preparation.<br/>
- Aid personally for visa documentation and counselling.<br/>
- Special class for developing techniques to face interview.<br/>
- Well managed and proven lesson plan and instruction methods.<br/>
- Time table as per the requirement of students.<br/>
- Easy location.<br/>
</span><br/>
                    
  	</div>
  );
};

var Service = function(){
  return(
  	<div>
  	<span className="title">Service </span><br/><br/>                 
  <span className="description">                  	
i. Abroad Study Counselling Worldwide<br/>

ii. Visa documentation & counselling<br/>

iii. Treatment Visa Processing<br/>

iv. Test Preparation (IELTS/TOEFL)<br/>

v. Bank Balance & Valuation<br/>

vi. Document Translation and CA & Audit Report<br/>

vii. And many more.....<br/>
</span><br/>
                    
  	</div>
  );
};

var Vision = function(){
  return(
  	<div>
  	<span className="title">Vision </span><br/><br/>  
  	<span className="description">               
                         The vision of AIE is to provide world-class education and to be part with international standards, in order to prepare Nepalese students to sit for the international preparation courses. More than international standard our vision is to prepare a Nepali student for global competition with high quality education around the globe. Nepalese students must learn new languages and also acquire basic and advanced IT skills in order to meet the demands of newly industrialized organizations and be eligible for selection at foreign colleges and universities for higher education.

To assist all AIE students to attain their personal, educational and career goals quickly and efficiently with the aid of the latest technological advances and excellent counselling services for abroad study is the main vision of our organisation. 
</span><br/> <br/>                   
  	</div>
  );
};

var COC = function(){
  return(
  	<div>
  		<span className="title">Code Of Conduct </span><br/><br/> 
  		<span className="description">               
                    	
Ample International Education Pvt. Ltd. The following code of conduct to ensures our quality services to our international partners (college/universities) abroad, students and our other parties:<br/>

- Represent institutions abroad with honesty and integrity.<br/>

- Strive to understand represented institutions' mission and goals, and approach to education.<br/>

- Become familiar with represented institutions admission prerequisites, English language proficiency requirements, application and acceptance procedures, and current objectives.<br/>

- Provide accurate and up-to-date information on represented institutions academic programs, living arrangements, tuition and fees, refund policies, and student support services.<br/>

- Provide to prospective students accurate and realistic advising in keeping with their educational objectives and financial situation.<br/>

- Provide all of represented institutions literature to prospective students free of charge.<br/>

- Use appropriate opportunities to increase public awareness of represented institutions.<br/>

- Include parent or sponsors in the advising process whenever possible.<br/>

- Demonstrate respect for the educational, economic, familial, cultural, and political background of prospective students.<br/>

- Not knowingly participate in, nor condone unfair or discriminatory practices.<br/>

- Provide competent, reputable, and professional service to prospective students to protect the interest of the students, represented institutions and our company.<br/>

- Represent all institutions fairly to enable prospective students and their families to make informed decisions.<br/>

- Cooperate in reasonable and appropriate ways with other educational consultants for the benefit of the students and represented institutions.<br/>

- Refrain from making any statements that are misleading, open to misinterpretations or not true to prospective students or their families during the advising process.<br/>

- Abide by any and all federal and state laws governing the consultation process and fair business practices.<br/>

</span><br/>                    

  	</div>
  );
};

var Message = function(){
  return(
  	<div>
  		<span className="title">Message From CEO </span><br/><br/> 
  		<span className="description">               
                    	
Dear Students & Parents,<br/>

I am quite happy to welcome you all to join Ample. I already have more than Five years of experience in the area of result-based coaching for TOEFL, IELTS, SAT, GRE, GMAT, Study Abroad Counseling and students' recruitment. My experiences, international exposure and trust of my successful students and parents have definitely influenced me to establish Ample as of international standard organizations.


At Ample, you will learn more than test preparation classes and studying abroad programs as we have a unique team which works so hard to connect you to success.

I hope to see you soon in AMPLE FAMILY!<br/>

<br/><br/>
Pramod Mani Adhikari<br/>
Chief Executive Officer

</span><br/>                    
  	</div>
  );
};

var Try = function(){
  return(
  	<div>
  	</div>
  );
};

var AboutUs = React.createClass({
  render: function() {

    return (
      <div className="aboutus">     
      	<Welcome />
      	<Why />
      	<Service />
      	<Vision />
      	<COC />
      	<Message />
      </div>
    );
  }
});

module.exports = AboutUs;
