import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <Link
              to="/blog/the-case-for-speed-and-quality-when-programming">
              The Case for Speed and Quality When Programming
            </Link>
            </b>
            </div>
            <div className="small-text">
              <i>01/13/2020</i>
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
