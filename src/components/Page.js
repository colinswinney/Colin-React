import React from 'react';
import DocumentTitle from 'react-document-title';
import PageHeader from './PageHeader';

class Page extends React.Component {
	render(props) {
		return (
			<div className="page">
			{console.log(this)}
	    
			    <DocumentTitle title={this.props.navTitle} />

			    <PageHeader {...this.props} />

				<article className={`content page ${this.props.contentClass}`}>
				    <div dangerouslySetInnerHTML={ {__html: this.props.content} }></div>
				</article>
		    </div>
		)
	}
}

export default Page