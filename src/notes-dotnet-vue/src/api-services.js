import axios from 'axios';

const debug = process.env.NODE_ENV !== 'production';
const url = debug ? 'https://localhost:44312/api/Notes' : 'https://notesdotnet.azurewebsites.net/api/Notes';

const api = axios.create({
	baseURL: url,
	timeout: 1500,
});

async function getNotes() {
	return await api.get();
}

async function searchNotes(author, from, to) {
	return await api.get('/Search', {
		params: { author, from, to },
	});
}

async function postNote(author, body) {
	return await api.post('/New', { body, author });
}

export { getNotes, searchNotes, postNote };
