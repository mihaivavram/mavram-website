import React, { Component } from 'react';

class AboutPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='centerContents' id='about'>
      <b>Hello,</b>
      <br />
      <p>
          I am a full stack-developer, freelancer, and social entrepreneur.
          I am also a second-year Ph.D. student
          (currently on a one year break)
          studying Information Science at the University of Illinois
          at Urbana-Champaign under Dr. <a target="_blank"
             href="http://jdiesnerlab.ischool.illinois.edu/">Jana Diesner</a>.
          My interests span creating tools for social good and impact
          using technology (web development, full-stack development,
          AI, blockchain, etc.). I am the creator of <a target="_blank"
             href="https://fakey.iuni.iu.edu/">Fakey</a> (a news literacy game)
          and am currently focusing on being a dev lead and freelancer at <a target="_blank"
             href="https://4castersports.com/">4Castersports</a>,
          which is a decentralized sports betting and prediction market
          startup using blockchain technologies. I am also the leader and
          innovator behind Welsome, which is an AI-powered
          scheduling system that can empower people to live happier,
          healthier, and more productive lives while also in-tune
          with improving the world through micro-actions.
          In the past, I have worked on <a target="_blank"
             href="http://hoaxy.iuni.iu.edu/">Hoaxy</a> (a misinformation
          visualization tool), link prediction on
          knowledge networks, graph counting, and some IT consulting work.
      </p>
      <b>What am I up to nowadays?</b>
      <ol>
        <li>Working as a full-stack freelancer</li>
        <li>Working on expanding and launching Welsome,
        a well being and social impact scheduling system</li>
        <li>Supporting and expanding <a target="_blank"
             href="https://fakey.iuni.iu.edu/">Fakey</a>
          <br /></li>
      </ol>
      </div>
    )
  }


}

export default AboutPage;
