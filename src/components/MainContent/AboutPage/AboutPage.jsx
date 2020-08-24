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
        <b>Hello friends,</b>
        <br />
        <p>
          I am a full stack developer specializing in back-end and front-end
          development, DevOps, as well as Machine Learning.
          <br />
          <br />
          <b>My specialization
          lies in the ability to envision, plan, and craft the intersectional
          pieces of a whole technology project from end to end.</b> I do this
          by maintaining best practices as a software engineer, always keeping
          up to date on the latest technology trends in all areas of software
          infrastructure, and building software with a bird's eye view.
          <br />
          <br />
          <b>My interests span creating useful software using the latest
          trends in technology, and ideally software that makes the world
          a better place.</b>
          <br />
          <br />
          I am the creator of <a
            target="_blank"
            href="https://fakey.iuni.iu.edu/"
            rel="noopener noreferrer">Fakey</a> (a news literacy tool for Web,
              Android, and iOS)
          and <a target="_blank"
                 href="https://welsome.org"
                 rel="noopener noreferrer">
              Welsome</a> (an all-inclusive self-improvement platform that
              can help us be better humans).
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
