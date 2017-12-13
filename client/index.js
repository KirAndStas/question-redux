import React from 'react';
import { render } from 'react-dom';

require('./assets/index.js');
import MainComponent from './MainComponent.jsx';

const MOUNT_NODE = document.getElementById('root');

function renderApp() {
    render(<MainComponent />, MOUNT_NODE);
}

renderApp();
