var React = require('react');
var Link = require('react-router').Link;

var IELTS = React.createClass({
  render: function() {
    return (
      <div className= "aboutus">
        <span className="title">IELTS</span><br/><br/>
      <span className="description">  
        IELTS (pronounced /'a?.?lts/), or 'International English Language Testing System', is an
         international standardised test of English language proficiency. It is jointly managed 
         by University of Cambridge ESOL Examinations, the British Council and IDP Education Pty
          Ltd, and was established in 1989.<br/>

There are two versions of the IELTS: the Academic Version and the General Training Version:<br/>

- The Academic Version is intended for those who want to enroll in universities and other 
institutions of higher education and for professionals such as medical doctors and nurses 
who want to study or practice in an English-speaking country. <br/>
- The General Training Version is intended for those planning to undertake non-academic
 training or to gain work experience, or for immigration purposes. <br/>
It is generally acknowledged that the reading and writing tests for the Academic Version 
are more difficult than those for the General Training Version, due to the differences in
 the level of intellectual and academic rigour between the two versions.<br/><br/>

IELTS is accepted by most Australian, British, Canadian, Irish, New Zealand and South 
African academic institutions, over 2,000 academic institutions in the United States, and
 various professional organisations. It is also a requirement for immigration to Australia
  and Canada.<br/><br/>

An IELTS result or Test Report Form (TRF - see below) is valid for two years.<br/><br/>

<span className="inside-title">IELTS characteristics</span><br/><br/>

The IELTS incorporates the following features:<br/>

- A variety of accents and writing styles presented in text materials in order to minimise 
linguistic bias. <br/>

- IELTS tests the ability to listen, read, write and speak in English. <br/>

- Band scores used for each language sub-skill (Listening, Reading, Writing, and Speaking). 
The Band Scale ranges from 0 ("Did not attempt the test") to 9 ("Expert User"). <br/>

- The speaking module - a key component of IELTS. This is conducted in the form of a 
one-to-one interview with an examiner. The examiner assesses the candidate as he or she 
is speaking, but the speaking session is also recorded for monitoring as well as re-marking 
in case of an appeal against the banding given. <br/>

- IELTS is developed with input from item writers from around the world. Teams are located
 in the USA, Great Britain, Australia, New Zealand, Canada and other English speaking nations. <br/><br/>

<span className="inside-title">IELTS test structure</span><br/>

All candidates must complete four Modules - Listening, Reading, Writing and Speaking - to obtain 
a band score, which is shown on an the IELTS Test Report Form (TRF). All candidates take the same
 Listening and Speaking Modules, while the Reading and Writing Modules differ depending on whether
  the candidate is taking the Academic or General Training Versions of the Test.<br/><br/>

The total test duration is around 2 hours and 45 minutes for Listening, Reading and Writing modules.<br/><br/>


- Listening: 40 minutes, 30 minutes for which a recording is played centrally and additional 
10 minutes for transferring answers onto the OMR answer sheet. <br/><br/>

- Reading: 60 minutes. <br/><br/>

- Writing: 60 minutes. <br/><br/>


(N.B.: No additional time is given for transfer of answers in Reading and Writing modules) <br/><br/>

The first three modules - Listening, Reading and Writing (always in that order) - are completed 
in one day, and in fact are taken with no break in between. The Speaking Module may be taken, at
 the discretion of the test centre, in the period seven days before or after the other Modules. <br/><br/>

The tests are designed to cover the full range of ability from non-user to expert user. <br/>

<span className="inside-title">Band scale </span><br/><br/>

IELTS is scored on a nine-band scale, with each band corresponding to a specified competence
 in English. Overall Band Scores are reported to the nearest whole or half band. For the 
 avoidance of doubt, the following rounding convention applies; if the average across the 
 four skills ends in .25, it is rounded up to the next half band, and if it ends in .75, it
  is rounded up to the next whole band. The nine bands are described as follows:<br/><br/>
 <span className="inside-title">  9 Expert User</span><br/>

Has fully operational command of the language: appropriate, accurate and fluent with complete 
understanding.<br/><br/>

<span className="inside-title">8 Very Good User</span><br/>

Has fully operational command of the language with only occasional unsystematic inaccuracies 
and inappropriacies. Misunderstandings may occur in unfamiliar situations. Handles complex
 detailed argumentation well.<br/><br/>

<span className="inside-title">7 Good User</span><br/>

Has operational command of the language, though with occasional inaccuracies, inappropriacies
 and misunderstandings in some situations. Generally handles complex language well and 
 understands detailed reasoning.<br/><br/>

<span className="inside-title">6 Competent User</span><br/>

Has generally effective command of the language despite some inaccuracies, inappropriacies and
 misunderstandings. Can use and understand fairly complex language, particularly in familiar
  situations.<br/><br/>

<span className="inside-title">5 Modest user</span><br/>

has partial command of the language, coping with overall meaning in most situations, though is
 likely to make many mistakes. Should be able to handle basic communication in own field.<br/><br/>

<span className="inside-title">4 Limited User</span><br/>

Basic competence is limited to familiar situations. Has frequent problems in using complex 
language.<br/><br/>

<span className="inside-title">3 Extremely Limited User</span><br/>

Conveys and understands only general meaning in very familiar situations. Frequent breakdowns
 in communication occur.<br/><br/>

<span className="inside-title">2 Intermittent User</span><br/>

No real communication is possible except for the most basic information using isolated words 
or short formulae in familiar situations and to meet immediate needs.<br/><br/>

<span className="inside-title">1 Non User</span><br/>

Essentially has no ability to use the language beyond possibly a few isolated words.<br/><br/>

<span className="inside-title">0 Did not attempt the test</span><br/>

No assessable information provided.<br/><br/>
<br/>
<span className="inside-title"> Conversion table </span><br/>

This table can be used for the Listening & Reading tests to convert raw scores to band scores.
 This chart is a guide only, because sometimes the scores adjust slightly depending on how
  difficult the exam is.<br/>


     
    <table>
  <tr>
    <td align="center">Band Score</td>
    <td align="center">9.0</td>
    <td align="center">8.5</td>
    <td align="center">8.0</td>
    <td align="center">7.5</td>
    <td align="center">7.0</td>
    <td align="center">6.5</td>
    <td align="center">6.0</td>
    <td align="center">5.5</td>
    <td align="center">5.0</td>
    <td align="center">4.5</td>
    <td align="center">4.0</td>
    <td align="center">3.5</td>
    <td align="center">3.0</td>
    <td align="center">2.5</td>
    <td align="center">2.0</td>
    <td align="center">1.5</td>
    <td align="center">1.0</td>
    <td align="center">0.0</td>
  </tr>
  <tr>
    <td align="center">Raw Score</td>
    <td align="center">39-40</td>
    <td align="center">37-38</td>
    <td align="center">35-36</td>
    <td align="center">32-34</td>
    <td align="center">29-31</td>
    <td align="center">26-28</td>
    <td align="center">22-25</td>
    <td align="center">18-21</td>
    <td align="center">15-17</td>
    <td align="center">12-14</td>
    <td align="center">10-11</td>
    <td align="center">08-10</td>
    <td align="center">6-7</td>
    <td align="center">4-5</td>
    <td align="center">3</td>
    <td align="center">2</td>
    <td align="center">1</td>
    <td align="center">0</td>
  </tr>
</table>

      </span>

</div>
    );
  }
});

module.exports = IELTS;