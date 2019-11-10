import React, { Component } from 'react';
import TopNav from './components/top-nav/TopNav.js'
import MainContent from './components/MainContent/MainContent.js'
import AboutPage from './components/MainContent/AboutPage/AboutPage.js'
import CvPage from './components/MainContent/CvPage/CvPage.js'
import PublicationsPage from './components/MainContent/PublicationsPage/PublicationsPage.js'
import ProjectsPage from './components/MainContent/ProjectsPage/ProjectsPage.js'
import TimeLapsePage from './components/MainContent/TimeLapsePage/TimeLapsePage.js'
import ConnectPage from './components/MainContent/ConnectPage/ConnectPage.js'
import Footer from './components/Footer.js'
import './ReactAppWrapper.css';

class ReactAppWrapper extends Component {
  constructor(props) {
    super(props)

    // Setting up state
    this.state = {
      // All possible states of pages
      // aboutPage - cvPage - publicationsPage - projectsPage
      // timeLapsePage - connectPage
      mainContentState: "aboutPage",
      mainContentComponent: <AboutPage />
    }

    this.stateHandler = this.stateHandler.bind(this)
    this.discernMainContent = this.discernMainContent.bind(this)
  }

  stateHandler(currentState) {
    let mainContent = this.discernMainContent(currentState);
    this.setState({
      mainContentState: currentState,
      mainContentComponent: mainContent
    })
  }

  discernMainContent(currentState) {
    if (currentState === 'aboutPage') {
      return <AboutPage />;
    }
    else if (currentState === 'cvPage') {
      return <CvPage />;
    }
    else if (currentState === 'publicationsPage') {
      return <PublicationsPage />;
    }
    else if (currentState === 'projectsPage') {
      return <ProjectsPage />;
    }
    else if (currentState === 'timeLapsePage') {
      return <TimeLapsePage />;
    }
    else if (currentState === 'connectPage') {
      return <ConnectPage />;
    }
  }

  render() {
    return (
      <div id="topmost-container">
        <div id="main-content">
          <TopNav stateHandler={ this.stateHandler }/>
          { this.state.mainContentComponent }
        </div>
        <Footer />
      </div>
    );
  }
}

export default ReactAppWrapper;
