import React, { Component } from 'react';

import './BlogPage.css';

class ProjectsPage extends Component {
  render() {
    return(
      <div className='primary-content'>
        <div class='blog-top-title'>
          <b>Recent Posts</b>
        </div>
        <div className='blog-template'>
          <div>
            <div>
            <b>
            <a target="_blank"
                href="https://welsome.org"
                rel="noopener noreferrer">
              Post Title
            </a>
            </b>
            </div>
            <div className="small-text">
              <i>01/01/2039</i>
            </div>
            <div className="small-text">
              <u>Tags:</u> Frontend Dev, Backend Dev, Postgres, Vue.js, Quasar,
              Docker, AWS Cloud, Python, Django, Freshchat, Mailchimp, Gunicorn,
              Nginx
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default ProjectsPage;
