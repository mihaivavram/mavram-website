import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/top-nav/TopNav.jsx';
import AboutPage from './components/MainContent/AboutPage/AboutPage.jsx';
import BlogPage from './components/MainContent/BlogPage/BlogPage.jsx';
import CvPage from './components/MainContent/CvPage/CvPage.jsx';
import PublicationsPage from './components/MainContent/PublicationsPage/PublicationsPage.jsx';
import ProjectsPage from './components/MainContent/ProjectsPage/ProjectsPage.jsx';
import PressPage from './components/MainContent/PressPage/PressPage.jsx';
import TestimonialsPage from './components/MainContent/TestimonialsPage/TestimonialsPage.jsx';
import TimeLapsePage from './components/MainContent/TimeLapsePage/TimeLapsePage.jsx';
import Footer from './components/Footer/Footer.jsx';
import './ReactAppWrapper.css';

class ReactAppWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      /**
       * All possible states of pages: aboutPage - cvPage - blogPage -
       * projectsPage - publicationsPage - pressPage - testimonialsPage -
       * timeLapsePage
       */
      mainContentComponent: <AboutPage />,
    };

    this.stateHandler = this.stateHandler.bind(this);
    this.discernMainContent = this.discernMainContent.bind(this);
  }

  stateHandler(currentState) {
    const mainContent = this.discernMainContent(currentState);
    this.setState({
      mainContentComponent: mainContent,
    });
  }

  discernMainContent(currentState) {
    if (currentState === 'aboutPage') {
      return <AboutPage />;
    } else if (currentState === 'cvPage') {
      return <CvPage />;
    } else if (currentState === 'blogPage') {
      return <BlogPage />;
    } else if (currentState === 'projectsPage') {
      return <ProjectsPage />;
    } else if (currentState === 'publicationsPage') {
      return <PublicationsPage />;
    } else if (currentState === 'pressPage') {
      return <PressPage />;
    } else if (currentState === 'testimonialsPage') {
      return <TestimonialsPage />;
    } else if (currentState === 'timeLapsePage') {
      return <TimeLapsePage />;
    }
  }

  render() {
    return (
      <Router>
        <div className="topmost-container">
          <TopNav stateHandler={this.stateHandler} />
          <div className="main-content">
            <Routes>
              <Route path="/cv" element={<CvPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/press" element={<PressPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/timelapse" element={<TimeLapsePage />} />
              <Route path="*" element={<AboutPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default ReactAppWrapper;
