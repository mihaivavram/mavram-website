import React, { Component } from 'react';
import ResumeFile from '../../../static-contents/pdfs/MihaiAvram_CV.pdf'

class CvPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='centerContents' id='cv'>
          <b>Resume:</b> <a href={ResumeFile}
            target='_blank'>
            Download As PDF
          </a>
          <iframe className='myResume' src={ResumeFile} >
          </iframe>
      </div>
    )

  }


}

export default CvPage;
