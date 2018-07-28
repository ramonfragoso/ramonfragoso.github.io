import React from 'react';
import love from '../images/love.png';
import './main.css';

export default class Footer extends React.Component {

  render () {
    return (
      <footer className="footer animated fadeInUp">
        <div>
          &copy; Made With <img width='11' heigth='11' src={love} /> by Ramon Fragoso 2018. Hosted by Netlify.
        </div>
      </footer>
    )
  }
}
