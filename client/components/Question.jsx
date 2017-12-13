import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './Question.less';

export default class Question extends Component {
	static propTypes = {
        text: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        preRate: PropTypes.number.isRequired,
        rate: PropTypes.number.isRequired,
		rateUpdate: PropTypes.func.isRequired
	}

    onChangeHandle = (starId) => {
        const { id, text, rateUpdate } = this.props;
        rateUpdate({ 
            id,
            text,
            rate: +document.getElementById(starId).value
        });
    }  

    updateRate(preRate, rate) {
        if (document.getElementById('star1')) {
            rate === 0 ? 
                document.getElementById(`star${preRate}`).checked = null 
                : document.getElementById(`star${rate}`).checked = 'true';
        }
    }

    render() {
        const { text, rate, id, preRate } = this.props;
        this.updateRate(preRate, rate);

        return (
            <div className='Question'>
                <div className='text'>{id}. {text} ?</div>
                <div className='rating'>
                    <input onChange={() => this.onChangeHandle('star5')} type='radio' id='star5' name='rating' value='5' />
                    <label htmlFor='star5'><img src='/static/images/star.svg' /></label>
                    <input onChange={() => this.onChangeHandle('star4')} type='radio' id='star4' name='rating' value='4' />
                    <label htmlFor='star4' ><img src='/static/images/star.svg' /></label>
                    <input onChange={() => this.onChangeHandle('star3')} type='radio' id='star3' name='rating' value='3' />
                    <label htmlFor='star3' ><img src='/static/images/star.svg' /></label>
                    <input onChange={() => this.onChangeHandle('star2')} type='radio' id='star2' name='rating' value='2' />
                    <label htmlFor='star2' ><img src='/static/images/star.svg' /></label>
                    <input onChange={() => this.onChangeHandle('star1')} type='radio' id='star1' name='rating' value='1' />
                    <label htmlFor='star1' ><img src='/static/images/star.svg' /></label>
                </div>
            </div>
        );
    }
}
