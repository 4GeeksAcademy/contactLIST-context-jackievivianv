import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const ModalUpdate = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context);

	const { showModal, contactIdToDelete } = state;

	//function removeContact(index) {
	//	actions.deleteContact(index);
	//}

	function handleDeleteContact(contactId) {
		actions.deleteContact(contactId);
	}

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
							{/*especiicarel submit que estara vinculado a una funcion agregar contacto*/}
							<form>
								<div className="form-group">
									<label>Full Name</label>
									{/* especificiar el evento on change en cada uno */}
									<input
										type="text"
										className="form-control"
										placeholder={props.name}
										//onChange={handleName}
									/>
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input
										type="phone"
										className="form-control"
										placeholder={props.phone}
										//onChange={handlePhone}
									/>
								</div>
								<div className="form-group">
									<label>Address</label>
									<input
										type="text"
										className="form-control"
										placeholder={props.address}
										//onChange={handleAddress}
									/>
								</div>
								<button type="submit" className="btn btn-primary form-control">
									save
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
	name: PropTypes.string,
	phone: PropTypes.number,
	address: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalUpdate.defaultProps = {
	show: false,
	onClose: null
};
