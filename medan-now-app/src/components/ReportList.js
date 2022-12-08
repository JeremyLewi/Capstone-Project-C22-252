import React from 'react';
import PropTypes from 'prop-types';
import ReportItem from './ReportItem';

function ReportList({ notes }) {
	return (
		<section className="report-list">
			{notes.map((note) => (
				<ReportItem key={note.id} id={note.id} {...note} />
			))}
		</section>
	);
}

ReportList.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired,
			body: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default ReportList;
