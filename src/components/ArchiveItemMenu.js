import React from 'react';
// import TechInfoRender from './portfolio/TechInfoRender';
import {
	NavLink,
	Link
} from 'react-router-dom';

class ArchiveItemMenu extends React.Component {
	titleChangerEnter() {
		var title = this.title;
		document.getElementById("title-target").innerHTML = title;
	}
	titleChangerLeave() {
		document.getElementById("title-target").innerHTML = this.props.content;
	}

	render(props) {
		return (

			<div className={this.props.location.pathname === "/portfolio" ? "portfolio-home-wrapper" : "archive-item-menu-wrapper"}>
				
		  		<div className="port-menu-fix-wrap">
					{this.props.location.pathname === "/portfolio" ? '' : <Link id="port-home-link" to={this.props.path}>Home</Link> }

	  				<h3 id="title-target">{this.props.content}</h3>
		  		</div>
		  		<ul>
		  		
		  		{this.props.routes.map((route, i) => (

					<li key={i}>
						<NavLink className="archive-item-link" key={i} to={`${this.props.match.url}${route.path}`}>
							<img onMouseOver={this.titleChangerEnter.bind(route)} onMouseOut={this.titleChangerLeave.bind(this)} data-title={route.navTitle} data-fart={route.navTitle} className="port-menu-image" src={route.image} alt="" />
						</NavLink>
						
					</li>

				))}
				</ul>
	  		</div>
		)
	}
}








// const techWidget = ({...match, ...route}) => (
// 	<div>
// 		{route['routes'].map((item, i) => (
// 	      <Route key={i} path={`${match.url}${item.path}`} render={props=> (

// 	        <TechInfoRender {...item} />)} />

// 	    ))}
//     </div>
// )
// const serviceWidget = ({...match, ...route}) => (
// 	<div>
// 		{route['routes'].map((item, i) => (
// 	      <h5 key={i}>{item.path}</h5>
// 	    ))}
//     </div>
// )

// const ArchiveItemMenu = ({...match, ...route}) => (
// 	<aside className="sidebar">

// 		<NavLink exact className="archive-item-link" key="archive-home-link" to={match.url}>{route.navTitle} Home</NavLink>
// 		{route['routes'].map((item, i) => (
// 	        <NavLink className="archive-item-link" key={i} to={`${match.url}${item.path}`}>{item.navTitle}</NavLink>
// 	    ))}

// 		{match.url === "/portfolio" ? techWidget({...match, ...route}) : '' }
// 		{match.url === "/services" ? serviceWidget({...match, ...route}) : '' }
	  

//   	</aside>
// )

export default ArchiveItemMenu