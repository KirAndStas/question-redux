import React, { Component }        from 'react';
import { Provider }                from 'react-redux';

// import App              from './App.jsx';
import store         from './store/index.js';
import Questions   from './containers/Questions.jsx';

export default class MainContainer extends Component {
    render() {
        return (
            <Provider store={store}>
	            <Questions />
            </Provider>
        );
    }
}

