import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import ReportPage from '../pages/ReportPage';
import ProfilePage from '../pages/ProfilePage';
import DetailPage from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { getUserLogged, putAccessToken } from '../utils/network-data';
import HomePage from '../pages/HomePage';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			authedUser: null,
			initializing: true,
		};

		this.onLoginSuccess = this.onLoginSuccess.bind(this);
		this.onLogout = this.onLogout.bind(this);
	}

	async onLoginSuccess({ accessToken }) {
		putAccessToken(accessToken);
		const { data } = await getUserLogged();

		this.setState(() => {
			return {
				authedUser: data,
			};
		});
	}

	onLogout() {
		this.setState(() => {
			return {
				authedUser: null,
			};
		});
		putAccessToken('');
	}

	async componentDidMount() {
		document.documentElement.setAttribute('data-theme', this.state.theme);
		const { data } = await getUserLogged();
		this.setState(() => {
			return {
				authedUser: data,
				initializing: false,
			};
		});
	}

	componentDidUpdate(prevState) {
		if (prevState.theme !== this.state.theme) {
			document.documentElement.setAttribute('data-theme', this.state.theme);
		}
	}

	render() {
		if (this.state.initializing) {
			return null;
		}

		if (this.state.authedUser === null) {
			return (
				<div className="app-container">
					<main>
						<Routes>
							<Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
							<Route path="/register" element={<RegisterPage />} />
						</Routes>
					</main>
				</div>
			);
		}

		return (
			<div className="app-container">
				<header>
					<Navigation logout={this.onLogout} name={this.state.authedUser.name} />
				</header>
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/profile" element={<ProfilePage />} />
						<Route path="/notes/new" element={<ReportPage />} />
						<Route path="/notes/:id" element={<DetailPage />} />
						<Route path="/*" element={<NotFoundPage />} />
					</Routes>
				</main>
			</div>
		);
	}
}

export default App;
