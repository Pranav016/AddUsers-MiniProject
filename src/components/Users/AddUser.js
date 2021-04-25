import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			return;
		}
		if (+enteredAge < 1) {
			// forcing conversion of enteredAge to number
			return;
		}
		const user = {
			id: Math.random().toString(),
			name: enteredUsername,
			age: enteredAge,
		};
		console.log(user);
		props.newUser(user);
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<div>
			<ErrorModal></ErrorModal>
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						onChange={usernameChangeHandler}
						value={enteredUsername}></input>
					{/* two way binding */}
					<label htmlFor='age'>Age (Years)</label>
					<input
						id='age'
						type='number'
						onChange={ageChangeHandler}
						value={enteredAge}></input>
					{/* two way binding */}
					<Button type='submit'>Submit</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
