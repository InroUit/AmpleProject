var React = require('react');
var Link = require('react-router').Link;

var TOEFL = React.createClass({
  render: function() {
    return (
      <div className= "aboutus">
        <span className="title">TOEFL</span><br/><br/>
      <span className="description">       
        The Test of English as a Foreign Language (or TOEFL, pronounced "toe-full") 
        evaluates the ability of an individual to use and understand English in an academic 
        setting. It sometimes is an admission requirement for non-native English speakers at 
        many English-speaking colleges and universities. <br />
        Additionally, institutions such as government agencies, licensing bodies, businesses,
         or scholarship programs may require this test. A TOEFL score is valid for two years 
         and then will no longer be officially reported since a candidate's language proficiency
          could have significantly changed since the date of the test. Colleges and universities
           usually consider only the most recent TOEFL score.<br /><br/>

        <span className="inside-title">Internet-Based Test</span><br/><br/>

Since its introduction in late 2005, the Internet-Based test (iBT) has progressively 
replaced both the computer-based (CBT) and paper-based (PBT) tests, although paper-based 
testing is still used in select areas. The iBT has been introduced in phases, with the United 
States, Canada, France, Germany, and Italy in 2005 and the rest of the world in 2006, with test
 centers added regularly. The CBT was discontinued in September 2006 and these scores are no 
 longer valid.<br/><br/>

<span className="inside-title">1.  Reading </span><br/><br/>

The Reading section consists of 3-5 passages, each approximately 700 words in length and 
questions about the passages. The passages are on academic topics; they are the kind of 
material that might be found in an undergraduate university textbook. Passages require 
understanding of rhetorical functions such as cause-effect, compare-contrast and argumentation.
 Students answer questions about main ideas, details, inferences, essential information, 
 sentence insertion, vocabulary, rhetorical purpose and overall ideas. New types of questions
  in the iBT require filling out tables or completing summaries. Prior knowledge of the subject 
  under discussion is not necessary to come to the correct answer. <br/><br/>

<span className="inside-title">2.  Listening </span><br/><br/>

The Listening section consists of 6 passages, 3-5 minutes in length and questions about the 
passages. These passages include 2 student conversations and 4 academic lectures or discussions.
 A conversation involves 2 speakers, a student and either a professor or a campus service provider.
  A lecture is a self-contained portion of an academic lecture, which may involve student 
  participation and does not assume specialized background knowledge in the subject area. Each 
  conversation and lecture stimulus is heard only once. Test takers may take notes while they 
  listen and they may refer to their notes when they answer the questions. Each conversation is 
  associated with 5 questions and each lecture with 6. The questions are meant to measure the
   ability to understand main ideas, important details, implications, relationships between ideas, 
   organization of information, speaker purpose and speaker attitude. <br/><br/>

<span className="inside-title">3.  Speaking </span><br/><br/>

The Speaking section consists of 6 tasks, 2 independent tasks and 4 integrated tasks. In the 2 
independent tasks, test takers answer opinion questions on familiar topics. They are evaluated
 on their ability to speak spontaneously and convey their ideas clearly and coherently. In 2 of
  the integrated tasks, test takers read a short passage, listen to an academic course lecture 
  or a conversation about campus life and answer a question by combining appropriate information
   from the text and the talk. In the 2 remaining integrated tasks, test takers listen to an 
   academic course lecture or a conversation about campus life and then respond to a question 
   about what they heard. In the integrated tasks, test takers are evaluated on their ability 
   to appropriately synthesize and effectively convey information from the reading and listening
    material. Test takers may take notes as they read and listen and may use their notes to help
     prepare their responses. Test takers are given a short preparation time before they have to
      begin speaking. <br/><br/>

<span className="inside-title">4.  Writing </span><br/><br/>

The Writing section measures a test taker's ability to write in an academic setting and consists 
of 2 tasks, 1 integrated task and 1 independent task. In the integrated task, test takers read a 
passage on an academic topic and then listen to a speaker discuss the same topic. The test taker
 will then write a summary about the important points in the listening passage and explain how 
 these relate to the key points of the reading passage. In the independent task, test takers must
  write an essay that states, explains and supports their opinion on an issue, supporting their
   opinions or choices, rather than simply listing personal preferences or choices. <br/><br/>

<table>
  <tr>
    <td align="center"><strong>Task</strong></td>
    <td align="center"><strong>Description</strong></td>
    <td align="center"><strong>Approx. time</strong></td>
  </tr>
  <tr>
    <td align="center">READING</td>
    <td align="center">3-5 passages, each containing 12-14 questions</td>
    <td align="center">60-100 minutes</td>
  </tr>
  <tr>
    <td align="center">LISTENING</td>
    <td align="center">6-9 passages, each containing 5-6 questions</td>
    <td align="center">60-90 minutes</td>
  </tr>
  <tr>
    <td align="center">BREAK</td>
    <td align="center">-</td>
    <td align="center">10 minutes;</td>
  </tr>
  <tr>
    <td align="center">SPEAKING</td>
    <td align="center">6 tasks and 6 questions</td>
    <td align="center">20 minutes</td>
  </tr>
  <tr>
    <td align="center">WRITING</td>
    <td align="center">2 tasks and 2 questions</td>
    <td align="center">55 minutes</td>
  </tr>
</table>

      </span>

</div>
    );
  }
});

module.exports = TOEFL;