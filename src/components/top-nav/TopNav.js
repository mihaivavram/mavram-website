import React, { Component } from 'react';
import './TopNav.css';

class TopNav extends Component {
  constructor() {
    super()
    this.state = {

    }

    // Binding all methods to 'this'
    this.aboutPageClick = this.aboutPageClick.bind(this)
    this.cvPageClick = this.cvPageClick.bind(this)
    this.publicationsPageClick = this.publicationsPageClick.bind(this)
    this.projectsPageClick = this.projectsPageClick.bind(this)
    this.timeLapsePageClick = this.timeLapsePageClick.bind(this)
    this.connectPageClick = this.connectPageClick.bind(this)
  }

  aboutPageClick() {

  }

  cvPageClick() {

  }

  publicationsPageClick() {

  }

  projectsPageClick() {

  }

  timeLapsePageClick() {

  }

  connectPageClick() {

  }

  render() {
    return (
        <div>
          <div id='headerContents'>
            <div id='myHeadshot'>
              <img src={ require('./MihaiMidClassy.JPG') }
                   alt='Mihai Avram'
                   width="150"
                   height="200"/>
              <div id='headerName'><b>Mihai Avram</b></div>
            </div>
          </div>
          <div id='navButtons'>
            <button id="aboutPage"
                    className="myButtons"
                    onClick={ this.aboutPageClick() }
                    type="button">About
            </button>
            <button id="cvPage"
                    className="myButtons"
                    onClick={ this.cvPageClick() }
                    type="button">CV
            </button>
            <button id="publicationsPage"
                    className="myButtons"
                    onClick={ this.publicationsPageClick() }
                    type="button">Publications
            </button>
            <button id="projectsPage"
                    className="myButtons"
                    onClick={ this.projectsPageClick() }
                    type="button">Projects
            </button>
            <button id="timeLapsePage"
                    className="myButtons"
                    onClick={ this.timeLapsePageClick() }
                    type="button">Time Lapse
            </button>
            <button id="connectPage"
                    className="myButtons"
                    onClick={ this.connectPageClick() }
                    type="button">Connect
            </button>
          </div>
        </div>
    );
  }
}

export default TopNav;
