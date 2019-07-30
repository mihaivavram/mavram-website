import React, { Component } from 'react';

class PublicationsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='centerContents' id='publications'>
        <b>Publications:</b>
        <b>
          <i>HarpLDA+: Optimizing Latent Dirichlet Allocation for
             Parallel Efficiency
          </i>
        </b>
        Bo Peng, Bingjing Zhang, Langshi Chen, Mihai Avram, Robert
        Henschel, Craig Stewart, Shaojuan Zhu,
        Emily Mccallum, Lisa Smith, Tom Zahniser, Jon Omer, Judy Qiu
        <i>Conference - IEEE Big Data 2017</i>
      	<a target="_blank"
           href="http://dsc.soic.indiana.edu/publications/HarpLDA%2B%20Optimizing%20Latent%20Dirichlet%20Allocation%20for%20Parallel%20Efficiency.pdf">
           (Download as PDF)</a>
        <b>
          <i>
            Finding and counting tree-like subgraphs using MapReduce
          </i>
        </b>
        Zhao Zhao, Langshi Chen, Mihai Avram, Meng Li, Guanying Wang,
        Ali Butt, Maleq Khan, Madhav Marathe, Judy Qiu, Anil Vullikanti
        <i>Journal - IEEE Transactions on Multi-Scale Computing Systems 2017
        </i>
      	<a target="_blank"
           href="http://dsc.soic.indiana.edu/publications/tmscssi_2017_harp_sahad.pdf">
           (Download as PDF)</a>
        <b>
          <i>RelSifter: Scoring Triples from Type-like Relations
          </i>
        </b>
        Prashant Shiralkar, Mihai Avram, Giovanni Luca Ciampaglia,
        Filippo Menczer, Alessandro Flammini
        <i>Conference - WSDM Cup 2017</i>
        <a target="_blank"
           href="http://www.uni-weimar.de/medien/webis/events/wsdm-cup-17/wsdmcup17-papers-final/wsdmcup17-triple-scoring/shiralkar17-notebook.pdf">
           (Download as PDF)</a>
        <b>
          <i>A Fast Algorithm to the Radiative Transport Equation and
             Implementation of Theory Into an Applet
          </i>
        </b>
        Mihai Avram, Manabu Machida
        <i>Report - 2013</i>
        <a target="_blank"
           href="http://www.mmachida.com/ezrte/RTEReport.pdf">
           (Download as PDF)</a>
        <b>
          <i>Civilian Deaths and the Iraq War
          </i>
        </b>
        Mihai Avram, Sorin Matei
        <i>Journal - Journal of Purdue Undergraduate Research 2013</i>
        <a target="_blank"
           href="https://docs.lib.purdue.edu/jpur/vol3/iss1/2/">
           (Download as PDF)</a>
    </div>
    )
  }


}

export default PublicationsPage;
