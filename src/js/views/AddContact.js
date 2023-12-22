import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

//declaramos estados de formulario 4 estados uno por cada input

export const AddContact = () => {
	const [newName, setNewName] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newAddress, setNewAddress] = useState("");

	const { store, actions } = useContext(Context);

	function handleName(event) {
		setNewName(event.target.value);
	}
	function handleEmail(event) {
		setNewEmail(event.target.value);
	}
	function handlePhone(event) {
		setNewPhone(event.target.value);
	}
	function handleAddress(event) {
		setNewAddress(event.target.value);
	}

	function handleSaveContact(event) {
		event.preventDefault();
		const newData = {
			full_name: newName,
			email: newEmail,
			phone: newPhone,
			address: newAddress,
			agenda_slug: "jackievivianv"
		};
		console.log(newData);
		actions.createContact(newData);
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				{/*especiicarel submit que estara vinculado a una funcion agregar contacto*/}
				<form onSubmit={handleSaveContact}>
					<div className="form-group">
						<label>Full Name</label>
						{/* especificiar el evento on change en cada uno */}
						<input type="text" className="form-control" placeholder="Full Name" onChange={handleName} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Enter email" onChange={handleEmail} />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone" onChange={handlePhone} />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={handleAddress}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
