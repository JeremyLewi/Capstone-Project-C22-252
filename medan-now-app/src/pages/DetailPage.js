import React from 'react';
import NotFoundPage from './NotFoundPage';
import { useParams, useNavigate } from 'react-router-dom';
import ReportDetail from '../components/ReportDetail';
import { getNote, deleteNote } from '../utils/network-data';

function DetailPage() {
	const { id } = useParams();
	const [note, setNote] = React.useState(null);
	const [isError, setIsError] = React.useState(false);
	const navigate = useNavigate();

	async function onDeleteNoteHandler() {
		await deleteNote(id);
		navigate('/');
	}

	React.useEffect(() => {
		getNote(id)
			.then(({ data }) => {
				setNote(data);
			})
			.catch(() => {
				setIsError(true);
			});
	}, [id]);

	if (isError) {
		return <NotFoundPage />;
	}

	if (!note) {
		return <p>Loading...</p>;
	}

	return <ReportDetail {...note} note={note} onDelete={onDeleteNoteHandler} />;
}

export default DetailPage;
