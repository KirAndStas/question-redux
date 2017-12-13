import { createStore } from 'redux';
import { questions } from '../../etc/questions.js';
import reducer from './reducers/index.js';

const initialState = {
		questions: {
			preRate: 1,
			currentId : 1,
			questions
		}
};

/* eslint-disable no-underscore-dangle */
const store = createStore(reducer, initialState,
	/* preloadedState, */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

export default store;
