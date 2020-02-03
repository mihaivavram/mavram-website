import React, { Component } from 'react';

import './BlogPage.css';

class BlogPage extends Component {
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
            <a
              target="_blanks"
              href="https://mihaisplace.blog/2020/01/30/the-case-for-speed-and-quality-when-programming/"
              rel="noopener noreferrer">
              The Case for Speed and Quality When Programming
            </a>
            </b>
            </div>
            <div className="small-text">
              <i>1/30/2020</i>
            </div>
            <div className="small-text">
              <u>Tags:</u> Full Stack Dev, Programming Speed,
                Programming Quality, Programming Philosophy
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default BlogPage;
