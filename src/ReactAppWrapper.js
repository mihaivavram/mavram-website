import React, { Component } from 'react';
import TopNav from './components/top-nav/TopNav.js'
import MainContent from './components/MainContent/MainContent.js'
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
      mainContentState: "aboutPage"
    }

    this.stateHandler = this.stateHandler.bind(this)
  }


  stateHandler(currentState) {
    this.setState({
      mainContentState: currentState
    })
  }

  render() {
    return (
      <div>
        <TopNav stateHandler={ this.stateHandler }/>
        <MainContent pageState={ this.state.mainContentState } />
        <Footer />
      </div>
    );
  }
}

export default ReactAppWrapper;
