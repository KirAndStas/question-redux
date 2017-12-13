import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes            from 'prop-types';

import Question from './Question.jsx';
import './Questions.less';

export default class Questions extends Component {
	static propTypes = {
        id: PropTypes.number.isRequired,
        preRate: PropTypes.number.isRequired,
        length: PropTypes.number.isRequired,
        question: PropTypes.object.isRequired,
		rateUpdate: PropTypes.func.isRequired
	}

    goToQuestion(side) {
        const { getQuestion, length, id } = this.props;
        let newId; 
       
        if (side === 'left') {
            newId = id !== 1 ? id - 1 : length;
        } else {
            newId = id !== length ? id + 1 : 1;
        }
        
        getQuestion(newId)
    }

    render() {
    	const { rateUpdate, question, id, preRate } = this.props;
        const { text, rate } = question;

        return (
            <div className='Questions'>
                <img onClick={() => this.goToQuestion('left')} style={{'width': '75px'}} src='/static/images/left.svg' />
                <Question 
                    rateUpdate={rateUpdate}
                    text={text}
                    id={id}
                    rate={rate}
                    preRate={preRate}
                />
                <img onClick={() => this.goToQuestion('right')} style={{'width': '75px'}} src='/static/images/right.svg' />
            </div>
        );
    }
}
