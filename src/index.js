import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './18n';
import Preloader from "./components/Preloader/Preloader";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense fallback={<Preloader/>}>
            <App/>
        </Suspense>
    </React.StrictMode>
);

reportWebVitals();
