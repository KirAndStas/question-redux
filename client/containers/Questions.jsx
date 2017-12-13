import { connect } from 'react-redux';
import getQuestion from '../store/actions/getQuestion.js';
import updateQuestions from '../store/actions/updateQuestions.js';
import Questions from '../components/Questions.jsx';

const mapStateToProps = state => {
    const { questions, currentId, preRate } = state.questions;

    return {
        preRate,
        id: currentId,
        length: questions.length,
        question: questions[currentId-1]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        rateUpdate: question => {
           dispatch(updateQuestions(question))
        },
        getQuestion: id => {
            // console.log(id)
            dispatch(getQuestion(id))
        }
    }
}

const question = connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions);

export default question
