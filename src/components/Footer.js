import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
			  <small>Copyright © {new Date().getFullYear()} Colin Swinney</small>
			</footer>
		)
	}
}

export default Footer