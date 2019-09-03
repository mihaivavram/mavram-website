import React, { Component } from 'react';
import FakeyLogo from '../../../static-contents/images/FakeyLogo.png';
import ScheduleBuddyLogo from '../../../static-contents/images/ScheduleBuddyInterimLogo.jpg';
import AdvLearningLogo from '../../../static-contents/images/AdversarialLearningSocialNetworks.jpg';
import FourcasterLogo from '../../../static-contents/images/4CasterLogo.png';
import HoaxyLogo from '../../../static-contents/images/HoaxySocialNetwork.png';
import GraphCountingLogo from '../../../static-contents/images/GraphCounting.png';
import KnowledgeLinkerLogo from '../../../static-contents/images/KnowledgeLinker.png';
import EchoGlobalLogo from '../../../static-contents/images/EchoGlobalLogistics.png';
import FHLBCLogo from '../../../static-contents/images/FHLBCDevOps.png';
import RadiativeTransportLogo from '../../../static-contents/images/RadiativeTransport.jpeg';
import CivIraqWarLogo from '../../../static-contents/images/IraqWar.jpg';

class ProjectsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='centerContents' id='projects'>
        <b>Current Projects</b>
        <div class='projectTemplate'>
          <div>
            <img src={ScheduleBuddyLogo}/>
          </div>
          <div>
            <div>
            <b>Welsome</b>
            </div>
            <div>
              Current calendars and scheduling systems are static, and often,
              superimposed by other people. Welsome is a scheduling
              system that serves to be a fiduciary for taking ownership of
              our own lives. In progressing towards higher well being and
              goal-driven behavior change in order to improve our lives,
              and our planet, one scheduled task at a time.
              We use AI as well as goal-driven tasks and scheduling
              paradigms backed by science to provide actionable insights
              that can make users aware of ways to improve their well being
              and achieve their goals.
            </div>
          </div>
        </div>
        <div class='projectTemplate'>
          <div>
            <img src={FakeyLogo}/>
          </div>
          <div>
            <div>
            <b>Fakey - The News Feed Literacy Game
              (<a target="_blank" href="https:/fakey.iuni.iu.edu">Web</a>, <a target="_blank"
                 href="https://play.google.com/store/apps/details?id=com.cnets.fakey">Android
              </a>, <a target="_blank"
                 href="https://itunes.apple.com/us/app/fakey-news/id1386410642?mt=8">iOS</a>)
            </b>
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
        <div class='projectTemplate'>
          <div>
            <img src={AdvLearningLogo}/>
          </div>
          <div>
            <div>
            <b>Adversarial Learning on Social Networks
              (<a target="_blank"
                 href="https://github.com/uiuc-ischool-scanr/social-network-adversarial-perturbations">Code</a>)
            </b>
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
        <div class='projectTemplate'>
          <div>
            <img src={FourcasterLogo}/>
          </div>
          <div>
            <div>
            <b>4Castersports
            (<a target="_blank"
               href="https://4castersports.com/">Web</a>)
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
        <b>Past Projects</b>
        <br />
        <div class='projectTemplate'>
          <div>
            <img src={HoaxyLogo}/>
          </div>
          <div>
            <div>
            <b>Hoaxy - The Social Media Information/Misinformation Diffusion Tool
              (<a target="_blank"
                 href="https://hoaxy.iuni.iu.edu/">Web</a>)
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
        <div class='projectTemplate'>
          <div>
            <img src={GraphCountingLogo}/>
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
                 href="https://dsc-spidal.github.io/harp/">Harp</a>,
              and implemented various algorithms that could scale to
              many nodes and edges using a high-performance computing
              setup with many nodes, cores, threads, and shared memory.
            </div>
          </div>
        </div>
        <div class='projectTemplate'>
          <div>
            <img src={KnowledgeLinkerLogo}/>
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
        <div class='projectTemplate'>
          <div>
            <img id='echoGlobalLogistics' src={EchoGlobalLogo}/>
          </div>
          <div>
            <div>
            <b>Echo Global Logistics Job Board
              (<a  target="_blank"
                 href="https://www.echo.com/careers/open-positions.html">Web</a>)
            </b>
            </div>
            <div>
              During my time as a consultant working for Avanade, I
              was tasked with web development component of the job board
              for Echo Global Logistics.
            </div>
          </div>
        </div>
        <div class='projectTemplate'>
          <div>
            <img src={FHLBCLogo}/>
          </div>
          <div>
            <div>
            <b>Federal Home Loan Bank of Chicago (Dev-Ops Role)
              (<a  target="_blank"
                 href="https://www.fhlbc.com/">Web</a>)
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
        <div class='projectTemplate'>
          <div>
            <img src={RadiativeTransportLogo}/>
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
                 href="https://sites.google.com/site/ezrte13/">
                 here</a>.
            </div>
          </div>
        </div>
        <div class='projectTemplate'>
          <div>
            <img src={CivIraqWarLogo}/>
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
