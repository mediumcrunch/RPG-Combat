import React from 'react'

class Header extends React.Component {

	render() {
		return (
			<header>
				<h1>{document.title} <span role="img" aria-label="swords">⚔️</span></h1>
			</header>
		);
	}
}

export default Header