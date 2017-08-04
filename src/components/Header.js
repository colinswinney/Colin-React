import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
	
	openNav() {
	    var x = document.getElementById("off-canvas-menu");
	    x.classList.toggle("open-menu");

	    var y = document.getElementById("main-view");
	    y.classList.toggle("open-menu");
	}

	render() {
		return (
			<header className="banner">

				<a role="button" onClick={this.openNav} id="menu-button">Menu</a>

				<nav className="navbar" id="off-canvas-menu">
					<ul>
					{this.props.data['routes'].map((route, i) => (
						<li key={i}><NavLink exact to={route['path']}>{route['navTitle']}</NavLink></li>
					))}
					</ul>
				</nav>

			</header>
		)
	}
}

export default Header