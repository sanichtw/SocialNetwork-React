import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import StoreContext from './redux/reducers/storeContext';
// import { subscribe } from './store/store';



const rerenderDOMTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                {/* <StoreContext value={store} /> */}
                <App state={state}
                    dispatch={store.dispatch.bind(store)}
                    store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderDOMTree(store.getState());

store.subscribe(() => rerenderDOMTree(store.getState()))
