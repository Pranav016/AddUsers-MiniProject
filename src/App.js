import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
	const [users, setNewUser] = useState([]);
	const addNewUser = (user) => {
		setNewUser((prevUsers) => [...prevUsers, user]);
	};
	return (
		<div>
			<AddUser newUser={addNewUser} />
			<UserList users={users} />
		</div>
	);
}

export default App;
