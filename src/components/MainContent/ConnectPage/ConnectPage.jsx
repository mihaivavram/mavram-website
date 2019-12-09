import React, { Component } from 'react';

import './ConnectPage.css';

class ConnectPage extends Component {
  render() {
    return(
      <div className='primary-content large-text'>
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

export default ConnectPage;
