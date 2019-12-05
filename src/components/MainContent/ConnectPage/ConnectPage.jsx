import React, { Component } from 'react';

import './ConnectPage.css';

class ConnectPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='centerContents' id='connect'>
        <b>Connect with me via:</b>
        <ul className="connectContents">
          <li><i className="far fa-envelope"></i> <b> E-Mail: </b>mihai (dot)
          v (dot) avram (at) gmail (dot) com
          </li>
          <li><i className="fab fa-linkedin"></i> <a target="_blank"
                 href="https://www.linkedin.com/in/mihai-avram-15493182/">
                 LinkedIn
               </a>
          </li>
          <li><i className="fab fa-facebook"></i> <a target="_blank"
                 href="https://www.facebook.com/mihai.v.avram">Facebook
               </a>
          </li>
          <li><i className="fab fa-twitter"></i> <a target="_blank"
                 href="https://twitter.com/mihaivavram">Twitter
              </a>
          </li>
          <li><i className="fab fa-github"></i> <a target="_blank"
               href="https://github.com/mihaivavram">GitHub
             </a>
          </li>
          <li><i className="fab fa-google"></i> <a target="_blank"
               href="https://scholar.google.com/citations?user=Yb8DVskAAAAJ&hl=en">
               Google Scholar
             </a>
           </li>
        </ul>
      </div>
    )
  }


}

export default ConnectPage;
