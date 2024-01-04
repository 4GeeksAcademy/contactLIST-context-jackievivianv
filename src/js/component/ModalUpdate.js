import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const ModalUpdate = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	//const { showModal, contactIdToDelete } = state;
	//const [showModal, setShowModal] = useState(false);
	const [inputValueName, setInputValueName] = useState(props.full_name);
	const [inputValuePhone, setInputValuePhone] = useState(props.phone);
	const [inputValueAddress, setInputValueAddress] = useState(props.address);
	const [id, setInputId] = useState(props.id);
	const { store, actions } = useContext(Context);

	/*function handleReload() {
		window.location.reload();
	}*/

	function handleName(event) {
		//setUpdateName(event.target.value);
		setInputValueName(event.target.value);
	}

	function handlePhone(event) {
		//setUpdatePhone(event.target.value);
		setInputValuePhone(event.target.value);
	}

	function handleAddress(event) {
		//setUpdateAddress(event.target.value);
		setInputValueAddress(event.target.value);
	}

	function handleUpdateContact(name, phone, address) {
		const updateData = {
			id: props.id,
			full_name: name || props.full_name,
			email: props.email,
			phone: phone || props.phone,
			address: address || props.address,
			agenda_slug: "jackievivianv"
		};

		console.log(updateData.id, updateData);
		actions.updateContact(updateData.id, updateData);
		console.log(props.phone);
	}

	//console.log(props.id);
	useEffect(() => {
		if (id !== null || id !== undefined) {
			console.log(id);
			//actions.getOneContact(props.id);
		}
	}, [id]);

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Update your contact:</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body container">
						<div>
							<form
								onSubmit={event => {
									event.preventDefault();
									handleUpdateContact(inputValueName, inputValuePhone, inputValueAddress);
								}}>
								<div className="form-group">
									<label>Full Name</label>
									{/* especificiar el evento on change en cada uno */}
									<input
										type="text"
										className="form-control"
										defaultValue={props.full_name}
										//placeholder={props.name}
										onChange={handleName}
										//onBlur={handleBlurName}
									/>
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input
										type="phone"
										className="form-control"
										defaultValue={props.phone}
										//placeholder={props.phone}
										onChange={handlePhone}
										//onBlur={handleBlurPhone}
									/>
								</div>
								<div className="form-group">
									<label>Address</label>
									<input
										type="text"
										className="form-control"
										defaultValue={props.address}
										//placeholder={props.address}
										onChange={handleAddress}
										//onBlur={handleBlurAddress}
									/>
								</div>
								<button type="submit" className="btn btn-primary form-control">
									Save Changes
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
ModalUpdate.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.number,
	full_name: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
	email: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalUpdate.defaultProps = {
	show: false,
	onClose: null
};
