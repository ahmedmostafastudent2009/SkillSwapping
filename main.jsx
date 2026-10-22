import { createRoot } from 'react-dom/client';
import { I18nProvider } from './I18nContext.jsx';
import App from './App.jsx';
import './index.css';
createRoot(document.getElementById('root')).render(<I18nProvider><App /></I18nProvider>);
