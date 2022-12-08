import React from 'react';
import SearchBar from '../components/SearchBar';
import ReportList from '../components/ReportList';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/network-data';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function ProfilePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [notes, setNotes] = React.useState([]);
	const [keyword, setKeyword] = React.useState(() => {
		return searchParams.get('keyword') || '';
	});

	React.useEffect(() => {
		getActiveNotes().then(({ data }) => {
			setNotes(data);
		});
	}, []);

	function onKeywordChangeHandler(keyword) {
		setKeyword(keyword);
		setSearchParams({ keyword });
	}

	const filteredNotes = notes.filter((note) => {
		return note.title.toLowerCase().includes(keyword.toLowerCase());
	});

	return (
		<>
			<section className="profile-page">
				<h2> Riwayat Laporan</h2>
				<SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />

				{notes.length !== 0 ? (
					<ReportList notes={filteredNotes} />
				) : (
					<section className="reports-list__empty">
						<p className="reports-list__empty__text">Anda belum memiliki riwayat laporan</p>
						<Link className="reports-list__empty__link" to="/notes/new">
							Buat Laporan baru
						</Link>
					</section>
				)}
			</section>
			<Footer />
		</>
	);
}
export default ProfilePage;
