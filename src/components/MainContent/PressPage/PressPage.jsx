import React, { Component } from 'react';

import './PressPage.css';


class PressPage extends Component {
  render() {
    return(
      <div className='primary-content'>
        <div className='top-title'>
          <b>Recent Press Coverage</b>
        </div>
        <div className='post-template'>
          <div>
            <div>
            <b>
            <a
              target="_blanks"
              href="https://www.poynter.org/fact-checking/2019/can-media-literacy-be-gamified-a-qa-with-one-of-fakeys-developers/"
              rel="noopener noreferrer">
              Can media literacy be gamified? A Q&A with one of Fakey’s developers
            </a>
            </b>
            </div>
            <div className="small-text">
              <i>Poynter - 01/26/2019</i>
            </div>
          </div>
        </div>
        <div className='post-template'>
          <div>
            <div>
            <b>
            <a
              target="_blanks"
              href="https://news.iu.edu/stories/2018/06/iub/inside/29-grad-combats-the-spread-of-fake-news-with-new-mobile-app.html"
              rel="noopener noreferrer">
              IU grad combats the spread of fake news with new mobile app            </a>
            </b>
            </div>
            <div className="small-text">
              <i>IU News - 06/29/2018</i>
            </div>
          </div>
        </div>
        <div className='post-template'>
          <div>
            <div>
            <b>
            <a
              target="_blanks"
              href="https://www.disinfo.eu/outreach/our-webinars/webinar-fakey-a-social-media-and-news-literacy-game-with-fakeys-co-creator-mihai-avram"
              rel="noopener noreferrer">
              Fakey – A social media and news literacy game
            </a>
            </b>
            </div>
            <div className="small-text">
              <i>EU Disnfo Lab - 2019</i>
            </div>
          </div>
        </div>
        <div className='post-template'>
          <div>
            <div>
            <b>
            <a
              target="_blanks"
              href="https://www.poynter.org/fact-checking/2018/meet-the-students-trying-to-solve-the-fake-news-problem/"
              rel="noopener noreferrer">
              Meet the students trying to solve the fake news problem
            </a>
            </b>
            </div>
            <div className="small-text">
              <i>Poynter - 04/10/2018</i>
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default PressPage;
