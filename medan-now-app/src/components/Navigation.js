import React from 'react';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/app-logo.svg';

function Navigation({ logout, name }) {
	return (
		<>
			<div className="app-bar">
				<img className="app-logo" src={logo} alt="logo" />
				<nav className="navigation">
					<ul>
						<li>
							<Link className="nav-link" to="/home">
								Home
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/home">
								About
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/home">
								Procedures
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/home">
								Statistic
							</Link>
						</li>
					</ul>
				</nav>
				<div className="nav-action">
					<div className="user-name">
						<FaUserCircle className="user-icon" />
						<Link className="profile-nav" to="/">
							{name}
						</Link>
					</div>
					<button className="button-logout" type="button" onClick={logout}>
						<FiLogOut />
					</button>
				</div>
			</div>
		</>
	);
}

Navigation.propTypes = {
	logout: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
};

export default Navigation;
