import React from 'react';
import RouteWithSubRoutes from './../components/RouteWithSubRoutes';
import {
	Route,
	Switch
} from 'react-router-dom';

import { CSSTransitionGroup } from 'react-transition-group';

class Main extends React.Component {
	render(props) {
		return (
			<main className="wrap" id="main-view">
			{console.log(this)}
				<Route render={({ location }) => (
				  // <CSSTransitionGroup
				  //   transitionName="fade"
				  //   transitionEnterTimeout={300}
				  //   transitionLeaveTimeout={300}
				  // >
				    <Switch key={location.key} location={location}>
				      {this.props.data['routes'].map((route, i) => (
					    <RouteWithSubRoutes key={i} {...props} {...route} />
					  ))}
				    </Switch>
				  // </CSSTransitionGroup>
				)}/>

			  {/*this.props.data['routes'].map((route, i) => (
			    <RouteWithSubRoutes key={i} {...props} {...route} />
			  ))*/}
			</main>
		)
	}
}

export default Main