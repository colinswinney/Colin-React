import React from 'react';

class PageHeader extends React.Component {
	render() {
		return (
			<div className="page-title">
				<h1>{this.props.navTitle}</h1>
			</div>
		)
	}
}

export default PageHeader