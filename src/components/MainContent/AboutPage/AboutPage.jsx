import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends Component {
  render() {
    return (
      <div className="primary-content">
        <div style={{ textAlign: 'center' }}>
          <h3>Founder & AI Engineer</h3>
        </div>
        <div>
          Hey{' '}
          <span role="img" aria-label="waving hand">
            👋
          </span>
          ,
        </div>
        <p>
          I&apos;m a developer and startup founder dedicated to leveraging technology for positive
          impact. I work across the stack, from web and mobile to backend and infrastructure, and
          these days a lot of machine learning and generative AI.
          <br />
          <br />
          Through{' '}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mihai-avram-15493182"
            rel="noopener noreferrer"
          >
            <b>Wholesome Future Labs</b>
          </a>
          , I help companies get AI out of the demo stage and into their actual product. Fifteen
          years of building software, some of it as CTO.
          <br />
          <br />I am also the creator of{' '}
          <a target="_blank" href="https://fakey.iuni.iu.edu/" rel="noopener noreferrer">
            Fakey
          </a>{' '}
          (a news literacy tool for Web, Android, and iOS). I feel very grateful for winning the{' '}
          <a
            target="_blank"
            href="https://cnets.indiana.edu/blog/2020/11/01/distinguished-masters-thesis-award/"
            rel="noopener noreferrer"
          >
            IU Distinguished Master&apos;s Thesis Award
          </a>{' '}
          through my work with Fakey and Hoaxy. With experience in software/web development and
          machine learning, my portfolio spans a variety of impactful projects.
        </p>
        <b>Currently, I&apos;m:</b>
        <ol>
          <li>
            Helping founders build and ship AI into their products, from first prototype to something
            that survives real users (most recently Cingo Research, see{' '}
            <Link to="/projects">Projects</Link>)
          </li>
          <li>
            Growing{' '}
            <a
              target="_blank"
              href="https://www.lacrmquicksync.com/"
              rel="noopener noreferrer"
            >
              LACRM QuickBooks Sync
            </a>
            , a SaaS that keeps invoicing and financial data in sync between QuickBooks and Less
            Annoying CRM
          </li>
          <li>
            Running{' '}
            <a target="_blank" href="https://gamepasspicker.com/" rel="noopener noreferrer">
              GamePicker
            </a>
            , a “Rotten Tomatoes for gaming” with 4,000+ users
          </li>
        </ol>
        <p>
          For a deeper dive into my projects and experiences, feel free to check out my CV,
          projects, and publications. Let&apos;s connect if you&apos;re interested in creating
          meaningful tech together!
        </p>
        <b>Connect with me via:</b>
        <ul className="connect-contents">
          <li>
            <i className="far fa-envelope"></i> <b> E-Mail: </b>mihai (dot) v (dot) avram (at) gmail
            (dot) com
          </li>
          <li>
            <i className="fab fa-linkedin"></i>{' '}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mihai-avram-15493182/"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <i className="fab fa-facebook"></i>{' '}
            <a
              target="_blank"
              href="https://www.facebook.com/mihai.v.avram"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <i className="fab fa-twitter"></i>{' '}
            <a target="_blank" href="https://twitter.com/mihaivavram" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <i className="fab fa-github"></i>{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mihaivavram">
              GitHub
            </a>
          </li>
          <li>
            <i className="fab fa-google"></i>{' '}
            <a
              target="_blank"
              href="https://scholar.google.com/citations?user=Yb8DVskAAAAJ&hl=en"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default AboutPage;
