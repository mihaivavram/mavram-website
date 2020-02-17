import React, { Component } from 'react';
import SocialBotLogo from '../../../static-contents/images/SocialBotLogo.jpg';
import FakeyLogo from '../../../static-contents/images/FakeyLogo.png';
import WelsomeLogo from '../../../static-contents/images/WelsomeLogo.png';
import AdvLearningLogo from '../../../static-contents/images/AdversarialLearningSocialNetworks.jpg';
import FourcasterLogo from '../../../static-contents/images/4CasterLogo.png';
import HoaxyLogo from '../../../static-contents/images/HoaxyLogo.png';
import GraphCountingLogo from '../../../static-contents/images/GraphCounting.png';
import KnowledgeLinkerLogo from '../../../static-contents/images/KnowledgeLinker.png';
import EchoGlobalLogo from '../../../static-contents/images/EchoGlobalLogistics.png';
import FHLBCLogo from '../../../static-contents/images/FHLBCLogo.jpeg';
import RadiativeTransportLogo from '../../../static-contents/images/RadiativeTransport.jpeg';
import CivIraqWarLogo from '../../../static-contents/images/IraqWar.jpg';
import PrivacyBrainLogo from '../../../static-contents/images/PrivacyBrainLogo.png';

import './ProjectsPage.css';

class ProjectsPage extends Component {
  render() {
    return(
      <div className='primary-content'>
        <b>Current Projects</b>
        <div className='project-template'>
          <div>
            <img src={WelsomeLogo} alt='Mountains and a sun'/>
          </div>
          <div>
            <div>
            <b>Welsome
            (<a target="_blank"
                href="https://welsome.org"
                rel="noopener noreferrer">
              Web
            </a>)
            </b>
            </div>
            <div className="small-text">
              <u>Tags:</u> Frontend Dev, Backend Dev, Postgres, Vue.js, Quasar,
              Docker, AWS Cloud, Python, Django, Freshchat, Mailchimp, Gunicorn,
              Nginx
            </div>
            <div>
              Welsome is a social media platform that focuses on actions we
              can take to achieve our goals.
              We all want to improve at something, whether it is our health,
              happiness, finances, relationships, or removing our carbon
              footprint, you name it. Welsome provides resources, actionable
              insights, and a socially gamified community for us to improve in
              all areas of life and partake in the latest trends.
              The goal behind Welsome is to create a platform that holds us
              accountable for improving our lives, and the planet.
            </div>
          </div>
        </div>
        <div className='project-template'>
          <div>
            <img src={FakeyLogo}
                 alt="A newspaper with the word Fakey in the front page"/>
          </div>
          <div>
            <div>
            <b>Fakey - The News Feed Literacy Game
              (<a target="_blank"
                  href="https:/fakey.iuni.iu.edu"
                  rel="noopener noreferrer">Web</a>, <a target="_blank"
               href="https://play.google.com/store/apps/details?id=com.cnets.fakey"
               rel="noopener noreferrer">
               Android</a>, <a target="_blank"
               href="https://itunes.apple.com/us/app/fakey-news/id1386410642?mt=8"
               rel="noopener noreferrer">
               iOS</a>)
            </b>
            </div>
            <div className="small-text">
              <u>Tags:</u> Frontend Dev, Backend Dev, MySQL, Vue.js, Quasar,
              Android Dev, iOS Dev, Python, Django, Apache, Gunicorn
            </div>
            <div>
              Fakey is a game with a purpose where players are
              placed in a simulated social media news feed and are
              tasked with disambiguating between high-quality news
              and lower quality news such as fake, bias, conspiracy,
              junk science, etc. The players are constructively
              directed towards creating a good social media experience
              where good information is shared and false information
              is fact-checked. We created this game for media literacy
              as well as for research in uncovering patterns in
              the way people interact with social media news feeds.
            </div>
          </div>
        </div>
        <div className='project-template'>
          <div>
            <img src={SocialBotLogo}
                 alt="A social bot"/>
          </div>
          <div>
            <div>
            <b>Identifying Automated Accounts on Twitter
              (<a target="_blank"
                  href="https://github.com/mihaivavram/twitterbots"
                  rel="noopener noreferrer">
                Code
              </a>)
            </b>
            </div>
            <div className="small-text">
              <u>Tags:</u> Machine Learning, Python, Scala, Spark, R,
              Data Mining, Social Media Mining
            </div>
            <div>
              This project involves working with the <a target="_blank"
                 href="https://github.com/duo-labs/twitterbots"
                 rel="noopener noreferrer">duo-labs
              </a> framework to classify and identify Twitter bots using
              Machine Learning classifiers such as Logistic Regression, Naive
              Bayes, Decision Trees, AdaBoost, and Random Forest. These
              classifiers have been implemented in R, with feature extraction
              methods written in Python, Scala, and Spark. The specifics of the
              project involved improving the framework and running various
              benchmarking tests to compare the performance of the techniques
              in this framework versus Indiana University's <a target="_blank"
                 href="https://botometer.iuni.iu.edu/#!/"
                 rel="noopener noreferrer">Botometer
              </a>.
            </div>
          </div>
        </div>
        <div className='project-template'>
          <div>
            <img src={PrivacyBrainLogo} alt="Logo of PrivacyBrain"/>
          </div>
          <div>
            <div>
            <b>PrivacyBrain
              (<a target="_blank"
                 href="http://privacybrain.com/"
                 rel="noopener noreferrer">Web</a>)
            </b>
            </div>
            <div className="small-text">
              <u>Tags:</u> Backend Dev, Frontend Dev, Web Automation, Node.js,
              Puppeteer, Cheerio, Apify, Postgres, AWS Cloud
            </div>
            <div>
              On this project, I am collaborating with PrivacyBrain
              founder <a target="_blank"
                 href="https://www.linkedin.com/in/elliottadams"
                 rel="noopener noreferrer">
                 Elliott Adams</a> en route to creating a platform that can
              automate the removal of compromising and sensitive employee data
              found on the web at scale.
              We are currently working on the automation process which
              involves various components such as web automation via Puppeteer,
              Cheerio, and other automation software mainly written in Node.js
              Postgres, and Apify.
            </div>
          </div>
        </div>
        <div className='project-template'>
          <div>
            <img src={AdvLearningLogo}
                 alt="People connected in a network"/>
          </div>
          <div>
            <div>
            <b>Adversarial Learning on Social Networks
              (<a target="_blank"
               href="https://github.com/uiuc-ischool-scanr/social-network-adversarial-perturbations"
               rel="noopener noreferrer">Code</a>)
            </b>
            </div>
            <div className="small-text">
              <u>Tags:</u> Network Analysis, Python, Pipelining, Test Driven
              Development
            </div>
            <div>
              In this project we are aiming to find the optimal adversarial
              sequence which can yield positive or negative outcomes
              in a social network.  For instance, if a person has very
              few friends and wants to be very influential in a short
              amount of time, what are the most optimal moves that
              the given person should make in order to achieve the
              maximum amount of influence.
            </div>
          </div>
        </div>
        <b>Past Projects</b>
        <br />
        <div className='project-template'>
          <div>
            <img src={FourcasterLogo}
                 alt="Logo of 4caster - a 4 and F combined"/>
          </div>
          <div>
            <div>
            <b>4Castersports
            (<a target="_blank"
               href="https://4castersports.com/"
               rel="noopener noreferrer">Web</a>)
            </b>
            </div>
            <div>
            4Castersports is sports betting reimagined. We are developing a
            groundbreaking sports betting platform untainted by commission
            fees and bookmakers. Our allegiance lies with the users and
            the users alone. Our ultimate goal is to build a robust global
            prediction market.
            </div>
          </div>
        </div>
        <div className='project-template'>
          <div>
            <img src={HoaxyLogo}
                 alt="The logo for Hoaxy - two arrows forming a square"/>
          </div>
          <div>
            <div>
            <b>Hoaxy - The Social Media Information/Misinformation Diffusion Tool
              (<a target="_blank"
                  href="https://hoaxy.iuni.iu.edu/"
                  rel="noopener noreferrer">Web</a>)
            </b>
            </div>
            <div>
              Hoaxy is a Social Media visualization tool which can capture
              virtually any story online, track it back to the accounts
              that are chatting about it, as well as the level of automation
              (are the accounts more human like or bot like) in the
              agents that are spreading the stories.  The stories can
              be real news, fake news, and any spectrum in between.
            </div>
          </div>
        </div>
        <div className='project-template'>
          <div>
            <img src={GraphCountingLogo}
                 alt="A graph containing various shapes"/>
          </div>
          <div>
            <div>
            <b>Graph Counting Using High-Performance Computing</b>
            </div>
            <div>
              Our approach was to take very large graphs which
              contained 300M+ nodes and 1B+ edges and count the
              number of embeddings (sequences of DNA for instance,
              or number of single-child families).  In order to perform
              such a feat, we used an HPC Machine Learning framework
              called <a target="_blank"
                        href="https://dsc-spidal.github.io/harp/"
                        rel="noopener noreferrer">Harp</a>,
              and implemented various algorithms that could scale to
              many nodes and edges using a high-performance computing
              setup with many nodes, cores, threads, and shared memory.
            </div>
          </div>
        </div>
        <div className='project-template'>
          <div>
            <img src={KnowledgeLinkerLogo} alt="A graph with colored nodes"/>
          </div>
          <div>
            <div>
            <b>Relational Based Learning on a Knowledge Base</b>
            </div>
            <div>
              In this project we looked at WikiData and DBpedia,
              two large knowlede bases, and attempted to answer
              questions for entities that did not have links. For instance,
              what nationality was Barack Obama, or in what profession
              was Elon Musk using Machine Learning and Network Science
              approaches.
            </div>
          </div>
        </div>
        <div className='project-template'>
          <div>
            <img className='wide-logo'
                 src={EchoGlobalLogo}
                 alt="Logo ECHO - the words ECHO"/>
          </div>
          <div>
            <div>
            <b>Echo Global Logistics Job Board
              (<a target="_blank"
                  href="https://www.echo.com/careers/open-positions.html"
                  rel="noopener noreferrer">Web</a>)
            </b>
            </div>
            <div>
              During my time as a consultant working for Avanade, I
              was tasked with web development component of the job board
              for Echo Global Logistics.
            </div>
          </div>
        </div>
        <div className='project-template'>
          <div>
            <img src={FHLBCLogo}
                 alt="FHLBC Logo - Three houses above the words FHLBC Chicago"/>
          </div>
          <div>
            <div>
            <b>Federal Home Loan Bank of Chicago (Dev-Ops Role)
              (<a  target="_blank"
                   href="https://www.fhlbc.com/"
                   rel="noopener noreferrer">Web</a>)
            </b>
            </div>
            <div>
              During my time as a consultant working for Avanade, I
              was part of the Dev-Ops team for nearly two years where
              I have taken part of the development lifecycle using the
              .NET stack and have supported many critical failures,
              live launches, as well as implemented novel features for
              the bank in order to enable it to function more efficiently.
            </div>
          </div>
        </div>
        <div className='project-template'>
          <div>
            <img src={RadiativeTransportLogo}
                 alt="A simulation graphic modeled by a computer"/>
          </div>
          <div>
            <div>
            <b>EZ-RTE - Creating an Applet for Radiative Transport in 3D
              (Undergraduate REU)
            </b>
            </div>
            <div>
              During the summer of 2013, I worked with Physics professor
              Manabu Machida in creating an applet for the Radiative
              Transport phenomenon in three dimensions. Dr. Machida,
              taught me the theory behind the phenomenon, and I was
              tasked with creating an applet that can visualize and graph
              the intensity of light based on the constants of absorption
              and scattering as light protrudes random media. The applet
              was created in Java and can be found <a target="_blank"
                 href="https://sites.google.com/site/ezrte13/"
                 rel="noopener noreferrer">
                 here</a>.
            </div>
          </div>
        </div>
        <div className='project-template'>
          <div>
            <img src={CivIraqWarLogo}
                 alt="Logo of the project regarding the Iraq Civil War"/>
          </div>
          <div>
            <div>
            <b>Civilian Deaths and the Iraq War (Undergraduate Project)
            </b>
            </div>
            <div>
              In my first foray into research, my adviser and I looked at
              civilian deaths and the iraq war using the Wiki-Leaks
              war logs dataset in order to uncover some of the entities
              responsible for the deaths of civilians.
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default ProjectsPage;
