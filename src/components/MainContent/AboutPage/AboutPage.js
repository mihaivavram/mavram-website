import React, { Component } from 'react';

class AboutPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='centerContents' id='about'>
        <b>Hello,</b>
        <p>
            I am a first-year Ph.D. student studying Information Science
            at the University of Illinois at Urbana-Champaign under Dr.
            <a target="_blank"
               href="http://jdiesnerlab.ischool.illinois.edu/">
              Jana Diesner</a>.
            My current interests span Computer Science and Machine
            Learning for Social Good. More specifically, I am the creator of
            <a target="_blank"
               href="https://fakey.iuni.iu.edu/">Fakey</a>
            (a news literacy game) and am currently focusing on
            adversarial learning in social networks as well as uncovering
            social media misinformation patterns. In the past,
            I have worked on
            <a target="_blank"
               href="http://hoaxy.iuni.iu.edu/">Hoaxy</a>
            (a misinformation visualization tool), link prediction on
            knowledge networks, graph counting, and some Web Development,
            Full Stack Development, and IT consulting work.
        </p>
        <b>What am I up to nowadays?</b>
        <p>
            1) Working on the creation of a democratized knowledge stream
            using citizen-science and React, Node.js, MongoDB.
            2) Developing and expanding a Python framework that allows for
            the experimenting with adversarial perturbations on social networks
            using the NetworkX library.
            3) Further supporting and maintaining Fakey, as well as
            mining for patterns in how people interact with
            information/misinformation/disinformation on social media
            feeds using.
            <a target="_blank"
               href="https://fakey.iuni.iu.edu/">Fakey</a>
            4) Creating a
            <a target="_blank"
              href="https://github.com/Open-Uptown/chicago-ygl-website">
              website</a>
            with WordPress, PHP, and Docker to support
            <a target="_blank"
               href="https://chicago.feb.gov/young-government-leaders/">
               YGL</a>
            which is a nonprofit providing a space for young government
            leaders in Chicago to make a difference.
            5) Looking for Web Development, Full Stack development,
            and/or Machine Learning jobs.
            6) Taking various Social Computing courses and improving my
            Web Development and Full Stack Development skills
        </p>
      </div>
    )
  }


}

export default AboutPage;
