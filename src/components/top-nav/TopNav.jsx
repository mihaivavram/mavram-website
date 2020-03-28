import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';
import MihaiHeadshot from '../../static-contents/images/mihai-headshot.jpg'

class TopNav extends Component {
  constructor(props) {
    super(props)

    this.aboutPageClick = this.aboutPageClick.bind(this)
    this.cvPageClick = this.cvPageClick.bind(this)
    this.projectsPageClick = this.projectsPageClick.bind(this)
    this.blogPageClick = this.blogPageClick.bind(this)
    this.publicationsPageClick = this.publicationsPageClick.bind(this)
    this.pressPageClick = this.pressPageClick.bind(this)
    this.timeLapsePageClick = this.timeLapsePageClick.bind(this)
  }

  aboutPageClick() {
    this.props.stateHandler("aboutPage");
  }

  cvPageClick() {
    this.props.stateHandler("cvPage");
  }

  projectsPageClick() {
    this.props.stateHandler("projectsPage");
  }

  blogPageClick() {
    this.props.stateHandler("blogPage");
  }

  publicationsPageClick() {
    this.props.stateHandler("publicationsPage");
  }

  pressPageClick() {
    this.props.stateHandler("pressPage");
  }

  timeLapsePageClick() {
    this.props.stateHandler("timeLapsePage");
  }

  render() {
    const routeLocation = window.location.hash;

    return (
        <div className='header-contents'>
            <div className='my-headshot'>
              <img src={ MihaiHeadshot }
                   alt='Headshot of Mihai Avram'
                   width="180"
                   height="150"/>
              <div className='header-name'><b>Mihai Avram</b></div>
            </div>
          {/* Nabar design inspired by: https://codepen.io/jstn/pen/zuDst */}
          <div className="nav-buttons">
            <ul>
              <li>
                <Link to="/"
                      className={ (routeLocation === '#/'
                                ? 'selected-nav-button'
                                : 'non-selected-nav-button') }
                      onClick={ this.aboutPageClick }>About
                </Link>
              </li>
              <li>
                <Link to="/cv"
                      className={ (routeLocation === '#/cv'
                                ? 'selected-nav-button'
                                : 'non-selected-nav-button') }
                      onClick={ this.cvPageClick }>CV
                </Link>
              </li>
              <li>
                <Link to="/projects"
                      className={ (routeLocation === '#/projects'
                                ? 'selected-nav-button'
                                : 'non-selected-nav-button') }
                      onClick={ this.projectsPageClick }>Projects
                </Link>
              </li>
              <li>
                <Link to="/blog"
                      className={ (routeLocation === '#/blog'
                                ? 'selected-nav-button'
                                : 'non-selected-nav-button') }
                      onClick={ this.blogPageClick }>Blog
                </Link>
              </li>
              <li>
                <Link to="/publications"
                      className={ (routeLocation === '#/publications'
                                ? 'selected-nav-button'
                                : 'non-selected-nav-button') }
                      onClick={ this.publicationsPageClick }>Publications
                </Link>
              </li>
              <li>
                <Link to="/press"
                      className={ (routeLocation === '#/press'
                                ? 'selected-nav-button'
                                : 'non-selected-nav-button') }
                      onClick={ this.pressPageClick }>Press
                </Link>
              </li>
              <li>
                <Link to="/timelapse"
                      className={ (routeLocation === '#/timelapse'
                                ? 'selected-nav-button'
                                : 'non-selected-nav-button') }
                      onClick={ this.timeLapsePageClick }>TimeLapse
                </Link>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}

export default TopNav;
