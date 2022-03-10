import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import StoreContext from './redux/storeContext';



const rerenderDOMTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store} >
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderDOMTree();

store.subscribe(() => rerenderDOMTree())
