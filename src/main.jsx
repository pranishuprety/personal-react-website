import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './index.jsx';
import { ThemeProvider } from './common/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StrictMode>
);
