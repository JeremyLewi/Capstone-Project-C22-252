import React from 'react';
import { PropTypes } from 'prop-types';
import useInput from '../hooks/useInput';
import logo from '../assets/app-logo.svg';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { FiUser } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function RegisterInput({ register }) {
	const [name, setName] = useInput('');
	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');

	function onSubmitHandler(event) {
		event.preventDefault();

		register({
			name,
			email,
			password,
		});
	}

	return (
		<div className="auth-container">
			<div className="auth-input">
				<img src={logo} alt="logo"></img>
				<h1>Registration</h1>
				<div className="input-group">
					<div className="input-box">
						<div className="input-icon">
							<FiUser className="icon-item" />
						</div>
						<input type="text" id="name" value={name} onChange={setName} placeholder="Name"></input>
					</div>
					<div className="input-box">
						<div className="input-icon">
							<HiOutlineMail className="icon-item" />
						</div>
						<input
							type="email"
							id="email"
							value={email}
							onChange={setEmail}
							placeholder="Email"
						></input>
					</div>
					<div className="input-box">
						<div className="input-icon">
							<HiOutlineLockClosed className="icon-item" />
						</div>
						<input
							type="password"
							id="password"
							value={password}
							onChange={setPassword}
							placeholder="Password"
						></input>
					</div>

					<button onClick={onSubmitHandler}>Sign Up</button>
				</div>

				<div className="break-line">
					<hr></hr>
					<p>Or</p>
					<hr></hr>
				</div>

				<div className="auth-social">
					<button>
						<FcGoogle className="icon-item google" />
						Google
					</button>
					<button>
						<GrFacebook className="icon-item fb" />
						Facebook
					</button>
				</div>
				<p className="text-no-account">Already have an account?</p>
				<Link className="alt-nav" to="/">
					Login
				</Link>
			</div>
		</div>
	);
}

RegisterInput.propTypes = {
	register: PropTypes.func.isRequired,
};

export default RegisterInput;
