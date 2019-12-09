import React, { Component } from 'react';
import './TopNav.css';
import MihaiHeadshot from '../../static-contents/images/mihai-headshot.jpg'

class TopNav extends Component {
  constructor(props) {
    super(props)

    // Binding all methods to 'this'
    this.aboutPageClick = this.aboutPageClick.bind(this)
    this.cvPageClick = this.cvPageClick.bind(this)
    this.publicationsPageClick = this.publicationsPageClick.bind(this)
    this.projectsPageClick = this.projectsPageClick.bind(this)
    this.timeLapsePageClick = this.timeLapsePageClick.bind(this)
    this.connectPageClick = this.connectPageClick.bind(this)
  }

  aboutPageClick() {
    this.props.stateHandler("aboutPage");
  }

  cvPageClick() {
    this.props.stateHandler("cvPage");
  }

  publicationsPageClick() {
    this.props.stateHandler("publicationsPage");
  }

  projectsPageClick() {
    this.props.stateHandler("projectsPage");
  }

  timeLapsePageClick() {
    this.props.stateHandler("timeLapsePage");
  }

  connectPageClick() {
    this.props.stateHandler("connectPage");
  }

  render() {
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
                {/* eslint-disable-next-line */}
                <a className={ (this.props.currentState === 'aboutPage'
                                ? 'selected-nav-button'
                                : 'non-selected-nav-button') }
                   href="#"
                   onClick={ this.aboutPageClick }>
                   About
                </a>
              </li>
              <li>
              {/* eslint-disable-next-line */}
              <a className={ (this.props.currentState === 'cvPage'
                              ? 'selected-nav-button'
                              : 'non-selected-nav-button') }
                   href="#"
                   onClick={ this.cvPageClick }>
                   CV
                </a>
              </li>
              <li>
              {/* eslint-disable-next-line */}
              <a className={ (this.props.currentState === 'projectsPage'
                              ? 'selected-nav-button'
                              : 'non-selected-nav-button') }
                   href="#"
                   onClick={ this.projectsPageClick }>
                   Projects
                </a>
              </li>
              <li>
              {/* eslint-disable-next-line */}
              <a className={ (this.props.currentState === 'publicationsPage'
                              ? 'selected-nav-button'
                              : 'non-selected-nav-button') }
                   href="#"
                   onClick={ this.publicationsPageClick }>
                   Publications
                </a>
              </li>
              <li>
              {/* eslint-disable-next-line */}
              <a className={ (this.props.currentState === 'timeLapsePage'
                              ? 'selected-nav-button'
                              : 'non-selected-nav-button') }
                   href="#"
                   onClick={ this.timeLapsePageClick }>
                   TimeLapse
                </a>
              </li>
              <li>
              {/* eslint-disable-next-line */}
              <a className={ (this.props.currentState === 'connectPage'
                              ? 'selected-nav-button'
                              : 'non-selected-nav-button') }
                   href="#"
                   onClick={ this.connectPageClick }>
                   Connect
                </a>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}

export default TopNav;
