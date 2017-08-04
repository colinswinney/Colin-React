import React from 'react';
import DocumentTitle from 'react-document-title';
import NameForm from './portfolio/NameForm';

class ArchiveItem extends React.Component {

  HasLink(props) {
    return (
      <h6>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.link}</a>
      </h6>
    )
  }

  render(props) {
    return (
      
      <article className={`content ${this.props.contentClass}`}>

        <DocumentTitle title={this.props.navTitle} />

        <h2>{this.props.navTitle}</h2>
        {this.props.link ? this.HasLink(this.props) : ''}
        
        <div dangerouslySetInnerHTML={ {__html: this.props.content} }></div>

        {this.props.path === "/this-site" ? <NameForm /> : ''}

      </article>
    )
  }

}

export default ArchiveItem