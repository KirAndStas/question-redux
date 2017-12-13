export default function getQuestion(id) {
	return {
		type: 'GET_QUESTION',
		id
	}
}