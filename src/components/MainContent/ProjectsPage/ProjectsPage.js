import React, { Component } from 'react';

class ProjectsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='centerContents' id='projects'>
        <b>Current Projects</b>
        <div className='projectTemplate'>
          <div>
            <img src="images/AdversarialLearningSocialNetworks.jpg"/>
          </div>
          <div>
            <div>
            <b>Adversarial Learning on Social Networks</b>
            </div>
            <div>
              In this project we are aiming to find the optimal adversarial
              sequence which can yield positive or negative outcomes
              in a social network.  For instance, if a person has very
              few friends and wants to be very influential in a short
              amount of time, what are the most optimal moves that
              the given person should make in order to achieve the
              maximum amount of influence. So far, we have created a
              Python framework that can perform adversarial perturbations
              using various user-defined metrics such as configured graphs,
              node positions, budget functions and costs, and evaluation metrics.
              Note: Code cannot yet be made available as the work is propritary
              and funded by
              <a about="_blank"
                 href="https://www.arl.army.mil/www/default.cfm?page=3050">IoBT</a>.
            </div>
          </div>
        </div>
        <div className='projectTemplate'>
          <div>
            <img src="images/FakeyLogo.png"/>
          </div>
          <div>
            <div>
            <b>Fakey - The News Feed Literacy Game
              (<a target="_blank" href="https:/fakey.iuni.iu.edu">Web</a>,
              <a target="_blank"
                 href="https://play.google.com/store/apps/details?id=com.cnets.fakey">Android
              </a>,
              <a target="_blank"
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
              Currently we are brainstorming extra features we should add
              to Fakey.
            </div>
          </div>
        </div>
        <div className='projectTemplate'>
          <div>
            <img src="images/OpenUptownLogo.png"/>
          </div>
          <div>
            <div>
            <b>Code For America: YGL Website Project</b>
            </div>
            <div>
              Collaborating with the Chicago Code for America
              <a about="_blank"
                 href="https://brigade.codeforamerica.org/brigades/Open-Uptown/">team</a>
              to create a
              <a about="_blank"
                 href="https://github.com/Open-Uptown/chicago-ygl-website">website</a>
              for the nonprofit Young Government Leaders
              (YGL) using WordPress, PHP, and Docker in order
              to empower YGL and provide a sustainable solution for YGL’s
              needs and capabilities.
            </div>
          </div>
        </div>
        <div className='projectTemplate'>
          <div>
            <img src="images/DemocratizedKnowledgeStream.jpeg"/>
          </div>
          <div>
            <div>
            <b>Crowdsourced and Democratized Knowledge Systems Stream</b>
            </div>
            <div>
              Imagine wanting to understand all the politicians that are
              frontrunners in the upcoming elections, or comparing all
              grocery store milk prices to find the cheapest milk in the area.
              Now imagine all of this information being available all in one place
              and contributed by the people via a Wiki model. This project
              aims to create a space where any complex idea or related pieces of
              information can be organized, discussed, and understood by the people
              in a very quick and robust way.
            </div>
          </div>
        </div>
        <b>Past Projects</b>
        <div className='projectTemplate'>
          <div>
            <img src="images/HoaxySocialNetwork.png"/>
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
        <div className='projectTemplate'>
          <div>
            <img src="images/GraphCounting.png"/>
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
              called
              <a target="_blank"
                 href="https://dsc-spidal.github.io/harp/">Harp</a>,
              and implemented various algorithms that could scale to
              many nodes and edges using a high-performance computing
              setup with many nodes, cores, threads, and shared memory.
            </div>
          </div>
        </div>
        <div className='projectTemplate'>
          <div>
            <img src="images/KnowledgeLinker.png"/>
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
        <div className='projectTemplate'>
          <div>
            <img id='echoGlobalLogistics' src="images/EchoGlobalLogistics.png"/>
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
        <div className='projectTemplate'>
          <div>
            <img src="images/FHLBCDevOps.png"/>
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
        <div className='projectTemplate'>
          <div>
            <img src="images/RadiativeTransport.jpeg"/>
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
              was created in Java and can be found
              <a target="_blank"
                 href="https://sites.google.com/site/ezrte13/">
                 here</a>.
            </div>
          </div>
        </div>
        <div className='projectTemplate'>
          <div>
            <img src="images/IraqWar.jpg"/>
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
