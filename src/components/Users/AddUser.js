import React, { useState, Fragment, useRef } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	// const [enteredName, setEnteredName] = useState('');
	// const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredUserName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;
		if (
			enteredUserName.trim().length === 0 ||
			enteredUserAge.trim().length === 0
		) {
			setError({
				title: 'Invalid Input',
				message: 'Please enter a valid name and age. (non-empty values)',
			});
			return;
		}
		if (+enteredUserAge < 1) {
			// forcing conversion of enteredAge to number
			setError({
				title: 'Invalid Age',
				message: 'Please enter a valid age. ( > 0)',
			});
			return;
		}
		const user = {
			id: Math.random().toString(),
			name: enteredUserName,
			age: enteredUserAge,
		};
		// const user = {
		// 	id: Math.random().toString(),
		// 	name: enteredName,
		// 	age: enteredAge,
		// };
		props.newUser(user);
		// setEnteredName('');
		// setEnteredAge('');

		// not a good practice but for demo purpose
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	};

	// const usernameChangeHandler = (event) => {
	// 	setEnteredName(event.target.value);
	// };
	// const ageChangeHandler = (event) => {
	// 	setEnteredAge(event.target.value);
	// };
	const errorHandler = () => {
		setError(null);
	};

	return (
		<Fragment>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}></ErrorModal>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						// onChange={usernameChangeHandler}
						// value={enteredName}
						ref={nameInputRef}></input>
					{/* two way binding when we use useState hooks (also controlled components), these become uncontrolled components when we use useRef hooks to access their value */}
					<label htmlFor='age'>Age (Years)</label>
					<input
						id='age'
						type='number'
						// onChange={ageChangeHandler}
						// value={enteredAge}
						ref={ageInputRef}></input>
					{/* two way binding when we use useState hooks (also controlled components), these become uncontrolled components when we use useRef hooks to access their value */}
					<Button type='submit'>Submit</Button>
				</form>
			</Card>
		</Fragment>
	);
};

export default AddUser;
