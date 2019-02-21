import React, { Component } from 'react';

class CvPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='centerContents' id='cv'>
          <b>Resume:</b>
          <a href="pdf/MihaiAvram_CV.pdf">Download As PDF</a>
          <img className='myResume' src='images/ResumeImage1.png'/>
          <img className='myResume' src='images/ResumeImage2.png'/>
          <img className='myResume' src='images/ResumeImage3.png'/>
      </div>
    )

  }


}

export default CvPage;
