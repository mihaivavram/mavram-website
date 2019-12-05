import React, { Component } from 'react';
import TopNav from './components/top-nav/TopNav.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import AboutPage from './components/MainContent/AboutPage/AboutPage.jsx'
import CvPage from './components/MainContent/CvPage/CvPage.jsx'
import PublicationsPage from './components/MainContent/PublicationsPage/PublicationsPage.jsx'
import ProjectsPage from './components/MainContent/ProjectsPage/ProjectsPage.jsx'
import TimeLapsePage from './components/MainContent/TimeLapsePage/TimeLapsePage.jsx'
import ConnectPage from './components/MainContent/ConnectPage/ConnectPage.jsx'
import Footer from './components/Footer/Footer.jsx'
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
    const mainContent = this.discernMainContent(currentState);
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
          <TopNav currentState={ this.state.mainContentState }
                  stateHandler={ this.stateHandler }/>
          { this.state.mainContentComponent }
        </div>
        <Footer />
      </div>
    );
  }
}

export default ReactAppWrapper;
