import React, { Component } from "react";

class AboutPage extends Component {
  render() {
    return (
      <div className="primary-content">
        <div style={{ textAlign: "center" }}>
          <h3>Founder / CTO / Full Stack Developer</h3>
        </div>
        <div>
          Hey{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
          ,
        </div>
        <p>
          I’m a <b>distinguished developer</b> and <b>startup founder</b>{" "}
          dedicated to leveraging technology for positive impact. I lead the
          development of innovative, human-centered software solutions that
          bridge <b>technology</b> and <b>impact</b> — spanning Web, Mobile, and
          Full-Stack Development, DevOps, Machine Learning, and Generative AI.
          <br />
          <br />
          As the founder of{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mihai-avram-15493182"
            rel="noopener noreferrer"
          >
            <b>Wholesome Future Labs</b>
          </a>
          , I'm passionate about building meaningful technology that addresses
          real-world challenges through modern applications and responsible AI
          practices.
          <br />
          <br />I am also the creator of{" "}
          <a
            target="_blank"
            href="https://fakey.iuni.iu.edu/"
            rel="noopener noreferrer"
          >
            Fakey
          </a>{" "}
          (a news literacy tool for Web, Android, and iOS). I feel very grateful
          for winning the{" "}
          <a
            target="_blank"
            href="https://cnets.indiana.edu/blog/2020/11/01/distinguished-masters-thesis-award/"
            rel="noopener noreferrer"
          >
            IU Distinguished Master's Thesis Award
          </a>{" "}
          through my work with Fakey and Hoaxy. With experience in software/web
          development and machine learning, my portfolio spans a variety of
          impactful projects.
        </p>
        <b>Currently, I'm:</b>
        <ol>
          <li>
            Helping ambitious founders turn bold ideas into high-impact digital
            products
          </li>
          <li>
            Developing an invoicing integration that simplifies accounting
            workflows for Less Annoying CRM users
          </li>
          <li>
            Maintaining and growing GamePicker — a “Rotten Tomatoes for Gaming”
            platform with 4,000+ users
          </li>
        </ol>
        <p>
          For a deeper dive into my projects and experiences, feel free to check
          out my CV, projects, and publications. Let's connect if you're
          interested in creating meaningful tech together!
        </p>
        <b>Connect with me via:</b>
        <ul className="connect-contents">
          <li>
            <i className="far fa-envelope"></i> <b> E-Mail: </b>mihai (dot) v
            (dot) avram (at) gmail (dot) com
          </li>
          <li>
            <i className="fab fa-linkedin"></i>{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mihai-avram-15493182/"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <i className="fab fa-facebook"></i>{" "}
            <a
              target="_blank"
              href="https://www.facebook.com/mihai.v.avram"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <i className="fab fa-twitter"></i>{" "}
            <a
              target="_blank"
              href="https://twitter.com/mihaivavram"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <i className="fab fa-github"></i>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mihaivavram"
            >
              GitHub
            </a>
          </li>
          <li>
            <i className="fab fa-google"></i>{" "}
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
