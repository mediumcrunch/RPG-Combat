import React from "react";
import ReactDOM from "react-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentTurn: "hero",
			victory: null,
			hero: {
				health: Math.ceil(Math.random() * 100),
				damage: Math.ceil(Math.random() * 10),
				inventory: null
			},
			enemy: {
				health: Math.ceil(Math.random() * 100),
				damage: Math.ceil(Math.random() * 10),
				inventory: null
			},
			items: {
				swordUpgrade: 2
			}
		}
	}

	heroAttack = () => {
		const {hero, enemy, currentTurn, victory } = this.state;

		let heroState = hero;
		let enemyState = enemy;
		let victoryState = victory;
		let currentTurnState = currentTurn === "hero" ? "enemy" : "hero";

		if (currentTurn === "hero" && !victoryState) {
			enemyState.health -= heroState.damage;

			if (enemyState.health <= 0) {
				victoryState = "hero";
			}

			this.setState({enemy: enemyState, currentTurn: currentTurnState, victory: victoryState}, () => {
				this.enemyTurn("attack");
			});


		}
	}

	enemyTurn = (lastTurn) => {
		const {hero, enemy, currentTurn, victory } = this.state;

		let heroState = hero;
		let enemyState = enemy;
		let victoryState = victory;
		let currentTurnState = currentTurn === "enemy" ? "hero" : "enemy";

		if (currentTurn === "enemy" && !victoryState) {
			setTimeout(() => {
				heroState.health -= enemyState.damage;

				if (heroState.health <= 0) {
					victoryState = "enemy";
				}

				this.setState({hero: heroState, currentTurn: currentTurnState, victory: victoryState})
			}, 1000);
		}
	}

	render() {
		const {hero, enemy, currentTurn, victory } = this.state;

		return (
			<React.Fragment>
				<Header />
				<section className={!victory ? currentTurn === "hero" ? "app container turn-hero victory-null" : "app container turn-enemy victory-null" : "app container victory-" + victory}>
					<div className="hero">
						<h2>
							Hero
							<span role="img" aria-label="sword" onClick={this.heroAttack} className="command" title="Attack">🗡️</span>
							{/* <span role="img" aria-label="shield" onClick={console.log("coming soon")} className="command" title="Raise Defense">🛡️</span> */}
						</h2>
						<ul>
							<li className="health">Health: {hero.health}</li>
							<li>Damage: {hero.damage}</li>
						</ul>
					</div>
					<div className="enemy">
						<h2>Enemy 💀</h2>
						<ul>
							<li className="health">Health: {enemy.health}</li>
							<li>Damage: {enemy.damage}</li>
						</ul>
					</div>
				</section>
				<Footer />
			</React.Fragment>
		);
	}
}

const Root = document.getElementById("root");

ReactDOM.render(<App />, Root);