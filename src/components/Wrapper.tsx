import Nav from './Nav';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Wrapper = (props: any) => {
	const [navigate, setNavigate] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get('user');
			} catch (e) {
				setNavigate(true);
			}
		})();
	}, []);

	if (navigate) {
		return <Navigate to="/login" />;
	}

	return (
		<>
			<Nav />
			<div className="container-fluid">
				<div className="row">
					<Menu />
					<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
						{props.children}
					</main>
				</div>
			</div>
		</>
	);
};

export default Wrapper;
