import React from 'react';

import AboutPage from './AboutPage/AboutPage.jsx'
import BlogPage from './BlogPage/BlogPage.jsx'
import CvPage from './CvPage/CvPage.jsx'
import ProjectsPage from './ProjectsPage/ProjectsPage.jsx'
import PublicationsPage from './PublicationsPage/PublicationsPage.jsx'
import TimeLapsePage from './TimeLapsePage/TimeLapsePage.jsx'


function MainContent(props) {
  if (props.mainContentState === 'aboutPage') {
    return <AboutPage />;
  }
  else if (props.mainContentState === 'cvPage') {
    return <CvPage />;
  }
  else if (props.mainContentState === 'projectsPage') {
    return <ProjectsPage />;
  }
  else if (props.mainContentState === 'blogPage') {
    return <BlogPage />;
  }
  else if (props.mainContentState === 'publicationsPage') {
    return <PublicationsPage />;
  }
  else if (props.mainContentState === 'timeLapsePage') {
    return <TimeLapsePage />;
  }
}

export default MainContent;
