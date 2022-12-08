import React from 'react';
import notfound from '../assets/404.svg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function NotFoundPage() {
	return (
		<>
			<div className="not-found">
				<img src={notfound} alt="not-found"></img>
				<h3>opps! page not found</h3>
				<Link to="/home">
					<button>back to home</button>
				</Link>
			</div>
			<Footer />
		</>
	);
}

export default NotFoundPage;
