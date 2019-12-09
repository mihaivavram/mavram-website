import React from 'react';
import AboutPage from './AboutPage/AboutPage.jsx'
import CvPage from './CvPage/CvPage.jsx'
import PublicationsPage from './PublicationsPage/PublicationsPage.jsx'
import ProjectsPage from './ProjectsPage/ProjectsPage.jsx'
import TimeLapsePage from './TimeLapsePage/TimeLapsePage.jsx'
import ConnectPage from './ConnectPage/ConnectPage.jsx'

function MainContent(props) {
  if (props.mainContentState === 'aboutPage') {
    return <AboutPage />;
  }
  else if (props.mainContentState === 'cvPage') {
    return <CvPage />;
  }
  else if (props.mainContentState === 'publicationsPage') {
    return <PublicationsPage />;
  }
  else if (props.mainContentState === 'projectsPage') {
    return <ProjectsPage />;
  }
  else if (props.mainContentState === 'timeLapsePage') {
    return <TimeLapsePage />;
  }
  else if (props.mainContentState === 'connectPage') {
    return <ConnectPage />;
  }
}

export default MainContent;
