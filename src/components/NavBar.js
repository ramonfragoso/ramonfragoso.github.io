import React from 'react';
import './main.css'

export default class NavBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
		}
		this.showNav = this.showNav.bind(this);	
	}

	showNav() {
		this.setState({showMenu: !this.state.showMenu})
	}

	render() {
		return(
			<div className={this.state.showMenu ? "navbar responsive" : "navbar"}>
					<a>Info</a>
					<a>Skills</a>
					<a>Portfolio</a>
					<a>Experience</a>
					<a>About</a>
				<a href="javascript:void(0);" className="icon" onClick={this.showNav}>
				<i className="fa fa-bars"></i></a>
			</div>
		)
	}
}