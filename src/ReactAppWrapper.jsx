import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TopNav from './components/top-nav/TopNav.jsx'
import AboutPage from './components/MainContent/AboutPage/AboutPage.jsx'
import BlogPage from './components/MainContent/BlogPage/BlogPage.jsx'
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

    this.state = {
      /**
       * All possible states of pages: aboutPage - cvPage - blogPage -
       * projectsPage - publicationsPage - timeLapsePage - connectPage
       */
      mainContentComponent: <AboutPage />
    }

    this.stateHandler = this.stateHandler.bind(this)
    this.discernMainContent = this.discernMainContent.bind(this)
  }

  stateHandler(currentState) {
    const mainContent = this.discernMainContent(currentState);
    this.setState({
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
    else if (currentState === 'blogPage') {
      return <BlogPage />;
    }
    else if (currentState === 'projectsPage') {
      return <ProjectsPage />;
    }
    else if (currentState === 'publicationsPage') {
      return <PublicationsPage />;
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
      <Router>
        <div className="topmost-container">
            <TopNav stateHandler={ this.stateHandler }/>
            <div className="main-content">
                <Switch>
                  <Route path="/cv">
                    <CvPage />
                  </Route>
                  <Route path="/projects">
                    <ProjectsPage />
                  </Route>
                  <Route path="/blog">
                    <BlogPage />
                  </Route>
                  <Route path="/publications">
                    <PublicationsPage />
                  </Route>
                  <Route path="/timelapse">
                    <TimeLapsePage />
                  </Route>
                  <Route path="/connect">
                    <ConnectPage />
                  </Route>
                  <Route path="/">
                    <AboutPage />
                  </Route>
                </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default ReactAppWrapper;
