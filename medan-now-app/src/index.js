import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import './styles/style.css';
import './styles/HomePage.css';
import './styles/ReportPage.css';
import './styles/DetailPage.css';
import './styles/ProfilePage.css';
import './styles/NotFoundPage.css';
import './styles/AuthPage.css';

const root = createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
