export default function questions(state={}, action) {
    const { questions, currentId, preRate } = state;

    switch (action.type) {
        case 'GET_QUESTION':
            return {
                preRate: questions[action.id-1].rate != 0 && questions[action.id-1].rate != preRate 
                    ? questions[action.id-1].rate 
                    : preRate,
                currentId: action.id,
                questions: questions
            }
        case 'UPDATE_QUESTIONS':
            return {
                preRate: action.question.rate,
                currentId,
                questions: questions.map(question => action.question.id === question.id ? action.question : question)
            }
        default:
            return state;
    }
}