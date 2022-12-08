import React from 'react';
import ReportInput from '../components/ReportInput';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';

function ReportPage() {
	const navigate = useNavigate();

	async function onAddNoteHandler(note) {
		await addNote(note);
		navigate('/');
	}

	return <ReportInput addNote={onAddNoteHandler} />;
}

export default ReportPage;
