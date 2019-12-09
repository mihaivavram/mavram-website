import React, { Component } from 'react';
import ResumeFile from '../../../static-contents/pdfs/MihaiAvram_CV.pdf'

import './CvPage.css';

class CvPage extends Component {
  render() {
    return(
      <div className='primary-content'>
          <b>Resume:</b> <a href={ResumeFile}
            target='_blank'
            rel="noopener noreferrer">
            Download As PDF
          </a>
          <iframe title='My Resume'
                  className='my-resume'
                  src={ResumeFile} >
          </iframe>
      </div>
    )

  }
}

export default CvPage;
