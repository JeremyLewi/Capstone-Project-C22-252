import React from 'react';
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: '',
		};

		this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
		this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
		this.onInputHandler = this.onInputHandler.bind(this);
	}

	onTitleChangeEventHandler(event) {
		this.setState(() => {
			return {
				title: event.target.value,
			};
		});
	}

	onBodyChangeEventHandler(event) {
		this.setState(() => {
			return {
				body: event.target.value,
			};
		});
	}

	onSubmitEventHandler(event) {
		event.preventDefault();
		this.props.addNote(this.state);
	}

	onInputHandler(event) {
		this.setState(() => {
			return {
				body: event.target.innerHTML,
			};
		});
	}

	render() {
		return (
			<div className="input-container">
				<div className="new-report__input">
					<h1>Form Laporan</h1>
					<input
						placeholder="Ketik Judul Laporan Anda"
						className="new-report__input__title"
						value={this.state.title}
						onChange={this.onTitleChangeEventHandler}
					></input>
					<textarea
						placeholder="Ketik Isi Laporan Anda"
						onChange={this.onBodyChangeEventHandler}
						onInput={this.onInputHandler}
					></textarea>
					<button
						className="new-report__btn__submit"
						type="button"
						title="simpan"
						onClick={this.onSubmitEventHandler}
					>
						lapor!
					</button>
				</div>
			</div>
		);
	}
}

NoteInput.propTypes = {
	addNote: PropTypes.func.isRequired,
};

export default NoteInput;
