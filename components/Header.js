import React from 'react'

class Header extends React.Component {

	render() {
		return (
			<header>
				<div className="container">
					<h1 className="brand"><a href="./">{document.title} <span role="img" aria-label="swords">⚔️</span></a></h1>
				</div>
			</header>
		);
	}
}

export default Header