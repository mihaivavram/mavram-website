import React, { Component } from 'react';
import AboutPage from './AboutPage/AboutPage.js'
import CvPage from './CvPage/CvPage.js'
import PublicationsPage from './PublicationsPage/PublicationsPage.js'
import ProjectsPage from './ProjectsPage/ProjectsPage.js'
import TimeLapsePage from './TimeLapsePage/TimeLapsePage.js'
import ConnectPage from './ConnectPage/ConnectPage.js'

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

  // aboutPage - cvPage - publicationsPage - projectsPage
  // timeLapsePage - connectPage

  // render() {
  //   return(
  //
  //   );
  // }





}

export default MainContent;
