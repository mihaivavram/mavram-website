import React, { Component } from 'react';

class AboutPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='centerContents' id='about'>
      <div style={{ textAlign: "center" }}>
        <h3>
          Full Stack Developer / Freelancer / Social Entrepreneur
        </h3>
      </div>
      <b>Hello,</b>
      <br />
      <p>
        I am a full stack developer specializing in back-end and front-end
        development, DevOps, as well as Machine Learning and Network Analysis.
        My interests span creating tools for social good using technology.
        I am the creator of <a target="_blank"
        href="https://fakey.iuni.iu.edu/">Fakey</a> (a news literacy game)
        and <a target="_blank" href="http://welsome.org">
            Welsome</a> (a platform for self-improvement and social impact).
        In the past, I have worked on many projects spanning software/web
        development and machine learning/prediction. You may check out my CV,
        projects, and publications for more information.
      </p>
      <b>What am I up to nowadays?</b>
      <ol>
        <li>Working as a full stack freelancer</li>
        <li>Working on expanding and
            launching <a target="_blank" href="http://welsome.org">
                        Welsome
                      </a>
        </li>
        <li>Supporting and expanding <a target="_blank"
             href="https://fakey.iuni.iu.edu/">Fakey</a>
          <br /></li>
      </ol>
      </div>
    )
  }


}

export default AboutPage;
