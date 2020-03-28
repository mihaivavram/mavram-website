import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return(
      <div className='primary-content'>
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
          I am the creator of <a
            target="_blank"
            href="https://fakey.iuni.iu.edu/"
            rel="noopener noreferrer">Fakey</a> (a news literacy game)
          and <a target="_blank"
                 href="https://welsome.org"
                 rel="noopener noreferrer">
              Welsome</a> (an action driven social media to help us achieve our
          goals).
          In the past, I have worked on many projects spanning software/web
          development and machine learning/prediction. You may check out my CV,
          projects, and publications for more information.
        </p>
        <b>What am I up to nowadays?</b>
        <ol>
          <li>Working as a full stack freelancer</li>
          <li>Working on expanding and
              launching <a target="_blank"
                           href="https://welsome.org"
                           rel="noopener noreferrer">
                          Welsome
                        </a>
          </li>
          <li>Supporting and expanding <a target="_blank"
               href="https://fakey.iuni.iu.edu/"
               rel="noopener noreferrer">Fakey</a>
            <br /></li>
        </ol>
        <b>Connect with me via:</b>
        <ul className="connect-contents">
          <li><i className="far fa-envelope"></i> <b> E-Mail: </b>mihai (dot)
          v (dot) avram (at) gmail (dot) com
          </li>
          <li><i className="fab fa-linkedin"></i> <a target="_blank"
                 href="https://www.linkedin.com/in/mihai-avram-15493182/"
                 rel="noopener noreferrer">
                 LinkedIn
               </a>
          </li>
          <li><i className="fab fa-facebook"></i> <a target="_blank"
                 href="https://www.facebook.com/mihai.v.avram"
                 rel="noopener noreferrer">Facebook
               </a>
          </li>
          <li><i className="fab fa-twitter"></i> <a target="_blank"
                 href="https://twitter.com/mihaivavram"
                 rel="noopener noreferrer">Twitter
              </a>
          </li>
          <li><i className="fab fa-github"></i> <a target="_blank"
               rel="noopener noreferrer"
               href="https://github.com/mihaivavram">GitHub
             </a>
          </li>
          <li><i className="fab fa-google"></i> <a target="_blank"
               href="https://scholar.google.com/citations?user=Yb8DVskAAAAJ&hl=en"
               rel="noopener noreferrer">
               Google Scholar
             </a>
           </li>
        </ul>
      </div>
    )
  }


}

export default AboutPage;
