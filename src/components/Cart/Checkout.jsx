import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => {
	return value.trim() === "";
};

const isFiveChars = (value) => {
	return value.trim().length === 5;
};

const Checkout = (props) => {
	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		street: true,
		city: true,
		postal: true,
	});

	const nameInput = useRef();
	const streetInput = useRef();
	const cityInput = useRef();
	const postalInput = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInput.current.value;
		const enteredStreet = streetInput.current.value;
		const enteredCity = cityInput.current.value;
		const enteredPostal = postalInput.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredStreetIsValid = !isEmpty(enteredStreet);
		const enteredPostalIsValid = isFiveChars(enteredPostal);
		const enteredCityIsValid = !isEmpty(enteredCity);

		setFormInputsValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			city: enteredCityIsValid,
			postal: enteredPostalIsValid,
		});

		const formIsValid = enteredCityIsValid && enteredNameIsValid && enteredPostalIsValid && enteredStreetIsValid;

		if (!formIsValid) {
			return;
		}

		// Submit cart data
		props.onSubmit({
			name: enteredName,
			street: enteredStreet,
			city: enteredCity,
			postal: enteredPostal,
		});
	};

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={`${classes.control} ${formInputsValidity.name ? "" : classes.invalid}`}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInput} />
				{!formInputsValidity.name && <p>Please enter a valid name.</p>}
			</div>
			<div className={`${classes.control} ${formInputsValidity.street ? "" : classes.invalid}`}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInput} />
				{!formInputsValidity.street && <p>Please enter a street name.</p>}
			</div>
			<div className={`${classes.control} ${formInputsValidity.postal ? "" : classes.invalid}`}>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalInput} />
				{!formInputsValidity.postal && <p>Please enter a postal code.</p>}
			</div>
			<div className={`${classes.control} ${formInputsValidity.city ? "" : classes.invalid}`}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInput} />
				{!formInputsValidity.city && <p>Please enter a city name.</p>}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
