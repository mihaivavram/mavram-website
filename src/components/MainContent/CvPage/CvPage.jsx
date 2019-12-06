import React, { Component } from 'react';
import ResumeFile from '../../../static-contents/pdfs/MihaiAvram_CV.pdf'

import './CvPage.css';

class CvPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='primary-content'>
          <b>Resume:</b> <a href={ResumeFile}
            target='_blank'>
            Download As PDF
          </a>
          <iframe className='my-resume' src={ResumeFile} >
          </iframe>
      </div>
    )

  }


}

export default CvPage;
