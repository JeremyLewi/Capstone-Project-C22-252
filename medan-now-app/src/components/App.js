import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from '../assets/app-logo.svg';
import HomePage from '../pages/HomePage';

function App() {
	return (
		<div className="app-container">
			<header>
				<div className="app-bar">
					<img className="app-logo" src={logo} alt="logo" />
					<nav className="navigation">
						<ul>
							<li>Home</li>
							<li>Statistic</li>
							<li>About</li>
							<li>Contact</li>
						</ul>
					</nav>
					<div className="nav-action">
						<button className="login__btn">Login</button>
						<button className="sign-up__btn">Sign Up</button>
					</div>
				</div>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</main>
			<footer>
				<div className="footer">
					<p>© 2022, Design & Developed by Team C22-252 </p>
				</div>
			</footer>
		</div>
	);
}

export default App;
