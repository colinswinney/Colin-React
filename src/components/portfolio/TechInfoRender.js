import React from 'react'; 

const TechInfoRender = ({...item}) => (

	<section className="tech-info">
		<h3>Technical Info</h3>
  		<ul>

			{item['techInfo'].map((item, i) => (
		      <li key={i} dangerouslySetInnerHTML={ {__html: item} }></li>
		    ))}

  		</ul>
  	</section>

)

export default TechInfoRender