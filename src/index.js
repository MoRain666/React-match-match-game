import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import matchMatchGame from './js/reducers/index';
import RouterApp from './js/components/router';

const store = createStore(matchMatchGame);

ReactDOM.render(
    <Provider store={store}>
        <RouterApp />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
