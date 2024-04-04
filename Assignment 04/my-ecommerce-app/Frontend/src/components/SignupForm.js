import { useState } from "react";
import LoginForm from "./LoginForm";

const SignupForm = () => {
	const [loginOn, setLoginOn] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [registrationStatus, setRegistrationStatus] = useState("");

	const handleLoginButton = () => {
		setLoginOn(true);
	};

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleConfirmPasswordChange = (event) => {
		setConfirmPassword(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleSignupSubmit = (event) => {
		event.preventDefault();

		if (username === '' || password === '' || confirmPassword === '' ||email === '') {
			setRegistrationStatus('All fields required!');
			return;
		}

		if (password !== confirmPassword) {
			setRegistrationStatus('Passwords do not match!');
			return;
		}
		
		const newUser = {
			username: username,
			password: password,
			email: email,
		};

		fetch('http://localhost:5100/login/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser)
		})
		.then(response => {
			if (response.ok) {
				setRegistrationStatus('User successfully registered!');
				setUsername('');
				setPassword('');
				setConfirmPassword('');
				setEmail('');
				return response.json();
			} else {
				throw new Error('Failed to register user');
			}
		})
		.then(data => {
			console.log('User registered successfully:', data);

			// Optionally, perform any further actions upon successful registration
		})
		.catch(error => {
			console.error('Error registering user:', error);
			// Handle errors or display error messages to the user
		});
	};

	return (
		<div>
			{loginOn ? (
				<LoginForm />
			) : (
				<div>
					<h2>Signup</h2>
					{registrationStatus && <p style={{ color: 'red' }}>{registrationStatus}</p> }
					<form onSubmit={handleSignupSubmit}>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							name="username"
							placeholder="Enter your username"
							// required
							value = {username}
							onChange = {handleUsernameChange}
						/>
						<br />
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Enter your password"
							// required
							value = {password}
							onChange = {handlePasswordChange}
						/>
						<br />
						<label htmlFor="confirm-password">Confirm Password:</label>
						<input
							type="password"
							id="confirm-password"
							name="confirm-password"
							placeholder="Confirm your password"
							// required
							value = {confirmPassword}
							onChange = {handleConfirmPasswordChange}
						/>
						<br />
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
							// required
							value = {email}
							onChange = {handleEmailChange}
						/>
						<br />
						<input type="submit" value="Signup" />
					</form>
					<button onClick={handleLoginButton}>Switch to Login</button>
				</div>
			)}
		</div>
	);
};

export default SignupForm;
