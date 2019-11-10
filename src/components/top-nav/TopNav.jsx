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
        <div>
          <div id='headerContents'>
            <div id='myHeadshot'>
              <img src={ MihaiHeadshot }
                   alt='Mihai Avram'
                   width="150"
                   height="150"/>
              <div id='headerName'><b>Mihai Avram</b></div>
            </div>
          </div>
          {/* Nabar design inspired by: https://codepen.io/jstn/pen/zuDst */}
          <div className="navButtons">
            <ul>
              <li>
                <a className={ (this.props.currentState === 'aboutPage'
                                ? 'selectedNavButton'
                                : 'nonSelectedNavButton') }
                   href="#"
                   onClick={ this.aboutPageClick }>
                   About
                </a>
              </li>
              <li>
              <a className={ (this.props.currentState === 'cvPage'
                              ? 'selectedNavButton'
                              : 'nonSelectedNavButton') }
                   href="#"
                   onClick={ this.cvPageClick }>
                   CV
                </a>
              </li>
              <li>
              <a className={ (this.props.currentState === 'projectsPage'
                              ? 'selectedNavButton'
                              : 'nonSelectedNavButton') }
                   href="#"
                   onClick={ this.projectsPageClick }>
                   Projects
                </a>
              </li>
              <li>
              <a className={ (this.props.currentState === 'publicationsPage'
                              ? 'selectedNavButton'
                              : 'nonSelectedNavButton') }
                   href="#"
                   onClick={ this.publicationsPageClick }>
                   Publications
                </a>
              </li>
              <li>
              <a className={ (this.props.currentState === 'timeLapsePage'
                              ? 'selectedNavButton'
                              : 'nonSelectedNavButton') }
                   href="#"
                   onClick={ this.timeLapsePageClick }>
                   TimeLapse
                </a>
              </li>
              <li>
              <a className={ (this.props.currentState === 'connectPage'
                              ? 'selectedNavButton'
                              : 'nonSelectedNavButton') }
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
