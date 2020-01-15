import React, { Component } from 'react';
import articleContent from './ArticlesMarkdown/the-case-for-speed-and-quality-when-programming.js';
import './BlogContent.css';

const ReactMarkdown = require('react-markdown');

class BlogContent extends Component {
  render() {
    return(
      <div className='primary-content'>
        <div class='blog-content-title blog-content'>
          <h3>
            <b>
              The Case for Speed and Quality When Programming
            </b>
          </h3>
        </div>
        <div class='blog-content'>
          Author: Mihai Avram | Date: 1/15/2020
          <ReactMarkdown source={articleContent}></ReactMarkdown>
        </div>

      </div>
    )
  }
}

export default BlogContent;
