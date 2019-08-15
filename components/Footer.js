import React from 'react'

class Footer extends React.Component {

	render() {
		return (
			<footer>
				<div className="container">
					<p><a href="./">{document.title}</a> made with <span role="img" aria-label="heart">💘</span> by Medium Crunch.</p>
				</div>
			</footer>
		);
	}
}

export default Footer