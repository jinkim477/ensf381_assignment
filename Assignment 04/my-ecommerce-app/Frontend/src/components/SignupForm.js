import { useState } from "react";
import LoginForm from "./LoginForm";

const SignupForm = () => {
	const [loginOn, setLoginOn] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");

	const handleLoginButton = () => {
		setLoginOn(true);
	};

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
        if (username === '') {
            console.log("Username cannot be empty");
            return;
        } // add code to display an error message to the page itself
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
        if (password === '') {
            console.log("Password cannot be empty");
            return;
        } // add code to display an error message to the page itself
	};

	const handleConfirmPasswordChange = (event) => {
		setConfirmPassword(event.target.value);
        if (password === '') {
            console.log("Password cannot be empty");
            return;
        } // add code to display an error message to the page itself
        else if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return;
        } // add code to display an error message to the page itself
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
        if (email === '') {
            console.log("Email cannot be empty");
            return;
        } // add code to display an error message to the page itself
	};

	const handleSignupSubmit = (event) => {
		event.preventDefault();

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
					<form onSubmit={handleSignupSubmit}>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							name="username"
							placeholder="Enter your username"
							required
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
							required
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
							required
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
							required
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
