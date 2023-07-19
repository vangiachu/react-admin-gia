import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Users from './pages/users/Users';
import Register from './components/Register';
import Login from './components/Login';
import UserCreate from './pages/users/UserCreate';
import UserEdit from './pages/users/UserEdit';
import Roles from './pages/roles/Roles';
import RoleCreate from './pages/roles/RoleCreate';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={'/'} element={<Dashboard />} />
					<Route path={'/register'} element={<Register />} />
					<Route path={'/login'} element={<Login />} />
					<Route path={'/users'} element={<Users />} />
					<Route path={'/users/create'} element={<UserCreate />} />
					<Route path={'/users/:id/edit'} element={<UserEdit />} />
					<Route path={'/roles'} element={<Roles />} />
					<Route path={'/roles/create'} element={<RoleCreate />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
