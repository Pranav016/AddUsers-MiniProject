import React from 'react';

const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={addUserHandler}>
			<label htmlFor='username'>Username</label>
			<input id='username' type='text'></input>
			<label htmlFor='age'>Age (Years)</label>
			<input id='age' type='number'></input>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default AddUser;
