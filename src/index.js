import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

ReactDOM.render(
  // <React.StrictMode></React.StrictMode>
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
