import React from 'react';
import prof_pic from '../images/prof_pic.jpg';
import './main.css';

export default class leftColumn extends React.Component {

  render () {
    return (
      <div className='column left animated fadeInLeft'>
        <div className="profpic-container">
        <img className="profpic" src={prof_pic} />
        </div>
        <div>
          <p/><font face='courier new'>Campina Grande, PB</font>
          <p/><font face='courier new'>20 yo</font>
          <p/><font face='courier new'>Web Development</font>
        </div>
      </div>
    )

  }

}
