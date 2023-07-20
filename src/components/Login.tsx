import axios from 'axios';
import { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [navigate, setNavigate] = useState(false);

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault();

		await axios.post('login', {
			email,
			password,
		});

		setNavigate(true);
	};

	if (navigate) {
		return <Navigate to={'/'} />;
	}

	return (
		<main className="form-signin">
			<form onSubmit={submit}>
				<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

				<input
					type="email"
					className="form-control"
					placeholder="Email"
					required
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type="password"
					className="form-control"
					placeholder="Password"
					required
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button className="btn btn-primary w-100 py-2" type="submit">
					Submit
				</button>
			</form>
		</main>
	);
};

export default Login;
