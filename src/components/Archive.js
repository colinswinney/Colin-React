import React from 'react';
import DocumentTitle from 'react-document-title';
import PageHeader from './PageHeader';
import ArchiveItem from './ArchiveItem';
import ArchiveItemMenu from './ArchiveItemMenu';
import { Route } from 'react-router-dom';

class Archive extends React.Component {
	render(props) {
		return (
			<div className="archive">
			{console.log(this)}
				    
			    <DocumentTitle title={this.props.navTitle} />

				<PageHeader {...this.props}/>

				{this.props.routes.map((item, i) => (
			      <Route key={i} path={`${this.props.match.url}${item.path}`} render={props=> (
			      		<div className={`archive-item-wrapper ${item.contentClass}`}>
		        			<ArchiveItem {...props} {...item} />
			        	</div>
			        )} />
			    ))}

				<ArchiveItemMenu {...this.props} />
		    </div>
		)
	}
}

export default Archive