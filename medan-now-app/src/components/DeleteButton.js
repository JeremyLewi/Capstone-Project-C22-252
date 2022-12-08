import React from "react";
import PropTypes from "prop-types";
import { IoTrashSharp } from "react-icons/io5";

function DeleteButton({ id, onDelete }) {
	return (
		<button className="action" type="button" title="Hapus" onClick={() => onDelete(id)}>
			<IoTrashSharp />
		</button>
	);
}

DeleteButton.propTypes = {
	id: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
