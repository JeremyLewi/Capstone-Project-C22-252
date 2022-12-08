import React from 'react';
import logo from '../assets/app-logo.svg';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function LoginInput({ login }) {
	const [email, onEmailChangeHandler] = useInput();
	const [password, onPasswordChangeHandler] = useInput();

	function onSubmitHandler(event) {
		event.preventDefault();

		login({
			email,
			password,
		});
	}

	return (
		<div className="auth-container">
			<div className="auth-input">
				<img src={logo} alt="logo"></img>
				<h1>Login</h1>
				<div className="input-group">
					<div className="input-box">
						<div className="input-icon">
							<HiOutlineMail className="icon-item" />
						</div>
						<input
							type="email"
							id="email"
							value={email}
							onChange={onEmailChangeHandler}
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
							onChange={onPasswordChangeHandler}
							placeholder="Password"
						></input>
					</div>

					<p>Forgot password?</p>
					<button onClick={onSubmitHandler}>Log In</button>
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
				<p className="text-no-account">Have no account yet?</p>
				<Link className="alt-nav" to="/register">
					Registration
				</Link>
			</div>
		</div>
	);
}

LoginInput.propTypes = {
	login: PropTypes.func.isRequired,
};

export default LoginInput;
