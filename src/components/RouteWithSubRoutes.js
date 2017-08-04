import React from 'react';
import { Route } from 'react-router-dom';

class RouteWithSubRoutes extends React.Component {
	render() {
		return (
			<Route exact={this.props.exact} path={this.props.path} render={props => (    
				<this.props.component {...props} {...this.props} />
			)} />
		)
	}
}

export default RouteWithSubRoutes