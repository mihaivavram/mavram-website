import React, { Component } from 'react';
import ResumeFile from '../../../static-contents/pdfs/MihaiAvram_CV.pdf'
import ResumeImage1 from '../../../static-contents/images/ResumeImage1.png'
import ResumeImage2 from '../../../static-contents/images/ResumeImage2.png'
import ResumeImage3 from '../../../static-contents/images/ResumeImage3.png'
import ResumeImage4 from '../../../static-contents/images/ResumeImage4.png'

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
          <img className='myResume'
               src={ResumeImage1}/>
          <img className='myResume'
               src={ResumeImage2}/>
          <img className='myResume'
               src={ResumeImage3}/>
         <img className='myResume'
               src={ResumeImage4}/>
      </div>
    )

  }


}

export default CvPage;
