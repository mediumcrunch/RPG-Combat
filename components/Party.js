import React from 'react'

class Header extends React.Component {

	render() {
		const party = this.props.party.map((member, index) =>
			<li className="party__member" key={'member-' + index}>
				<ul>
					{Object.keys(member).map((stat, index) =>
						<li key={'stat-' + index}>{(stat !== 'name') ? <React.Fragment>{stat}: {member[stat]}</React.Fragment> : <strong>{member[stat]}</strong>}</li>
					)}
				</ul>
			</li>
		);

		return (
			<section className="party">
				<div className="container">
					<h2>Party</h2>
					<ul className="party__list">
						{party}
					</ul>
				</div>
			</section>
		);
	}
}

export default Header