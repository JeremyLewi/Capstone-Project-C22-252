import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';

function ReportItem({ id, title, createdAt, body }) {
	return (
		<article className="report-item">
			<p className="report-item__title">Judul Laporan : {title} </p>
			<p className="report-item__body">Isi Laporan : {body}</p>
			<p className="report-item__date">Waktu Pelaporan : {showFormattedDate(createdAt)}</p>
			<Link className="report-item__nav" to={`/notes/${id}`}>
				Detail Laporan
			</Link>
		</article>
	);
}

ReportItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};

export default ReportItem;
