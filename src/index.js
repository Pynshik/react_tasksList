import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App.jsx';
import './i18n';

import {Provider} from 'react-redux';
import {store} from './redux/store';

ReactDOM.render(
    <Router>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Provider>
    </Router>,
    document.getElementById('root'),
);
