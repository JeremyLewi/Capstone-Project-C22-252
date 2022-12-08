import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import { showFormattedDate } from '../utils/index';

function ReportDetail({ id, title, createdAt, body, onDelete }) {
	return (
		<section className="detail-page">
			<h3 className="detail-page__title">Judul Laporan : {title}</h3>
			<p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
			<div className="detail-page__body">Isi Laporan : {body}</div>
			<div className="detail-page__action">
				<DeleteButton id={id} onDelete={onDelete} />
			</div>
		</section>
	);
}

ReportDetail.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default ReportDetail;
