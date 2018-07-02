import React from 'react';
import './main.css'

export default class Social extends React.Component {

  render () {
    return (
      <div className='row animated fadeInUp'>

        <i className="fas fa-angle-double-down downArrow animated infinite bounce"></i>
        <hr className='linha'/>
        <a className='column icons' href="https://github.com/ramonfragoso" target='_blank' title="GitHub"><i class="fab fa-github-square"></i></a>
        <a className='column icons' href="https://www.linkedin.com/in/ramon-fragoso-4b5511136/" target='_blank' title="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a className='column icons' href="https://www.instagram.com/rmnfrgs/" target='_blank' title="Instagram"><i class="fab fa-instagram"></i></a>
        <a className='column icons' href="https://www.facebook.com/ramon.fragosodasilva" target='_blank' title="Facebook"><i class="fab fa-facebook-square"></i></a>
        <p/>
      </div>
    );
  }

}
