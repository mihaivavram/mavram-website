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
              href="https://mihaisplace.blog/2020/08/07/the-state-of-full-stack-tech-in-2020/"
              rel="noopener noreferrer">
              The State of Full Stack Tech in 2020
            </a>
            </b>
            </div>
            <div className="small-text">
              <i>08/07/2020</i>
            </div>
            <div className="small-text">
              <u>Tags:</u> Back End Frameworks, Front End Frameworks, Databases,
                           Full Stack Development, Machine Learning Frameworks,
                           Mobile Frameworks
            </div>
          </div>
        </div>
        <div className='blog-template'>
          <div>
            <div>
            <b>
            <a
              target="_blanks"
              href="https://mihaisplace.blog/2020/05/17/why-use-machine-learning-pipelines-and-what-frameworks-exist-for-them/"
              rel="noopener noreferrer">
              Why Use Machine Learning Pipelines and What Frameworks Exist for Them?
            </a>
            </b>
            </div>
            <div className="small-text">
              <i>5/17/2020</i>
            </div>
            <div className="small-text">
              <u>Tags:</u> Machine Learning, Machine Learning Pipelines, DAGs,
                           AutoML, scikit-learn, Python, TensorFlow Extended,
                           Microsoft Azure Machine Learning Pipelines
            </div>
          </div>
        </div>
        <div className='blog-template'>
          <div>
            <div>
            <b>
            <a
              target="_blanks"
              href="https://mihaisplace.blog/2020/04/09/a-brief-summary-of-no-code-and-the-main-players-in-the-space/"
              rel="noopener noreferrer">
              A Brief Summary of "No Code" and the Main Players in the Space
            </a>
            </b>
            </div>
            <div className="small-text">
              <i>4/9/2020</i>
            </div>
            <div className="small-text">
              <u>Tags:</u> No Code, Low Code, Startups, Code Faster,
                           Build Faster, Agile
            </div>
          </div>
        </div>
        <div className='blog-template'>
          <div>
            <div>
            <b>
            <a
              target="_blanks"
              href="https://mihaisplace.blog/2020/02/17/tools-and-techniques-to-help-you-code-and-work-faster/"
              rel="noopener noreferrer">
              Tools and Techniques to Help You Code and Work Faster
            </a>
            </b>
            </div>
            <div className="small-text">
              <i>2/16/2020</i>
            </div>
            <div className="small-text">
              <u>Tags:</u> Programming Speed, Working Speed, IDEs,
                Code Scaffolding Tools, Code Searching Tools
            </div>
          </div>
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
