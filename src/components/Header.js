import React from 'react';
import './main.css';

export default class Header extends React.Component {
  constructor () {
    super();
    this.name = 'ramon'
  }
  render() {
    return(
    <header className='header animated fadeInDown'>
      <p><strong>Ramon</strong> Fragoso</p>
      <h5><i>"Teria maior confiança no desempenho de um homem que espera ter uma grande recompensa do que no daquele que já a recebeu."</i> - Voltaire</h5>
    </header>
  );
  }
}
