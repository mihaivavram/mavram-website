import React, { Component } from 'react';

import AsonamPaper from '../../../static-contents/pdfs/CRV-asonam_2019_paper_191.pdf';
import MDPIPaper from '../../../static-contents/pdfs/MDPI-InformationPublication.pdf';

import './PublicationsPage.css';


class PublicationsPage extends Component {
  render() {
    return(
      <div className='primary-content'>
          <b>Publications:</b>
          <div className="publication">
            <b>
              <i>Fakey: A Game Intervention to Improve News Literacy on 
                 Social Media
              </i>
            </b>
            <br></br>
              Nicholas Micallef, Mihai Avram, Filippo Menczer, and Sameer Patil
            <br></br>
            <i>Conference - (CSCW 2021) - Human-Computer Interaction
            </i>
            <br></br>
            <a target="_blank"
               rel="noopener noreferrer"
               href="https://dl.acm.org/doi/pdf/10.1145/3449080">
               (Download as PDF)</a>
          </div>
          <div className="publication">
            <b>
              <i>Exposure to Social Engagement Metrics
                 Increases Vulnerability to Misinformation
              </i>
            </b>
            <br></br>
              Mihai Avram, Nicholas Micallef, Sameer Patil, Filippo Menczer
            <br></br>
            <i>Journal - Misinformation Review (Harvard Kennedy School 2020)
            </i>
            <br></br>
            <a target="_blank"
               rel="noopener noreferrer"
               href="https://arxiv.org/pdf/2005.04682.pdf">
               (Download as PDF)</a>
          </div>
          <div className="publication">
            <b>
              <i>Effectiveness of the Execution and Prevention of Metric-Based
                 Adversarial Attacks on Social Network Data
              </i>
            </b>
            <br></br>
               Nikolaus Nova Parulian, Tiffany Lu, Shubhanshu Mishra,
               Mihai Avram, Jana Diesner
            <br></br>
            <i>Journal - Multidisciplinary Digital Publishing Institute 2020
            </i>
            <br></br>
            <a target="_blank"
              href={MDPIPaper}
              rel="noopener noreferrer">
               (Download as PDF)</a>
          </div>
          <div className="publication">
            <b>
              <i>Adversarial perturbations to manipulate the
                 perception of power and influence in networks
              </i>
            </b>
            <br></br>
            Mihai Valentin Avram, Shubhanshu Mishra,
            Nikolaus Nova Parulian, Jana Diesner
            <br></br>
            <i>Conference - (ASONAM 2019) The 2019 IEEE/ACM International
              Conference on Advances in Social Networks Analysis and Mining
            </i>
            <br></br>
            <a target="_blank"
               href={AsonamPaper}
               rel="noopener noreferrer">
               (Download as PDF)</a>
          </div>
          <div className="publication">
            <b>
              <i>Curbing the Spread of Misinformation (Response Essay)
              </i>
            </b>
            <br></br>
            Mihai Avram and Maria D. Molina
            <br></br>
            <i>Journal - RTI Press (2018)</i>
            <br></br>
            <a target="_blank"
               rel="noopener noreferrer"
               href="https://www.rti.org/sites/default/files/resources/rti-publication-file-4295b53c-cb10-4510-a3db-50fa6ea79ea6.pdf#page=34">
               (Download as PDF)</a>
          </div>
          <div className="publication">
            <b>
              <i>HarpLDA+: Optimizing Latent Dirichlet Allocation for
                 Parallel Efficiency
              </i>
            </b>
            <br></br>
            Bo Peng, Bingjing Zhang, Langshi Chen, Mihai Avram, Robert
            Henschel, Craig Stewart, Shaojuan Zhu,
            Emily Mccallum, Lisa Smith, Tom Zahniser, Jon Omer, Judy Qiu
            <br></br>
            <i>Conference - IEEE Big Data 2017</i><br></br>
            <a target="_blank"
               rel="noopener noreferrer"
               href="http://dsc.soic.indiana.edu/publications/HarpLDA%2B%20Optimizing%20Latent%20Dirichlet%20Allocation%20for%20Parallel%20Efficiency.pdf">
               (Download as PDF)</a>
          </div>
          <div className="publication">
            <b>
              <i>
                Finding and counting tree-like subgraphs using MapReduce
              </i>
            </b>
            <br></br>
            Zhao Zhao, Langshi Chen, Mihai Avram, Meng Li, Guanying Wang,
            Ali Butt, Maleq Khan, Madhav Marathe, Judy Qiu, Anil Vullikanti
            <br></br>
            <i>Journal - IEEE Transactions on Multi-Scale Computing Systems 2017
            </i>
            <br></br>
            <a target="_blank"
               rel="noopener noreferrer"
               href="http://dsc.soic.indiana.edu/publications/tmscssi_2017_harp_sahad.pdf">
               (Download as PDF)</a>
          </div>
          <div className="publication">
            <b>
              <i>RelSifter: Scoring Triples from Type-like Relations
              </i>
            </b>
            <br></br>
            Prashant Shiralkar, Mihai Avram, Giovanni Luca Ciampaglia,
            Filippo Menczer, Alessandro Flammini
            <br></br>
            <i>Conference - WSDM Cup 2017</i>
            <br></br>
            <a target="_blank"
               rel="noopener noreferrer"
               href="http://www.uni-weimar.de/medien/webis/events/wsdm-cup-17/wsdmcup17-papers-final/wsdmcup17-triple-scoring/shiralkar17-notebook.pdf">
               (Download as PDF)</a>
          </div>
          <div className="publication">
            <b>
              <i>A Fast Algorithm to the Radiative Transport Equation and
                 Implementation of Theory Into an Applet
              </i>
            </b>
            <br></br>
            Mihai Avram, Manabu Machida
            <br></br>
            <i>Report - 2013</i>
            <br></br>
            <a target="_blank"
               rel="noopener noreferrer"
               href="http://www.mmachida.com/ezrte/RTEReport.pdf">
               (Download as PDF)</a>
          </div>
          <div className="publication">
            <b>
              <i>Civilian Deaths and the Iraq War
              </i>
            </b>
            <br></br>
            Mihai Avram, Sorin Matei
            <br></br>
            <i>Journal - Journal of Purdue Undergraduate Research 2013</i>
            <br></br>
            <a target="_blank"
               rel="noopener noreferrer"
               href="https://docs.lib.purdue.edu/jpur/vol3/iss1/2/">
               (Download as PDF)</a>
          </div>
      </div>
    )
  }
}

export default PublicationsPage;
