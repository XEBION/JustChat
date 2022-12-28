export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Vadim',
		imageUri: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=672',
	}, {
		id: 'u2',
		name: 'Lukas',
		imageUri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
	}],
	messages: [
		{
		id: 'm1',
		content: 'How are you, Lukas!',
		createdAt: '2022-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2022-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Lukas',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2022-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Lukas',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the stream now.',
		createdAt: '2022-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm5',
		content: 'How is your uni going?',
		createdAt: '2022-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm6',
		content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2022-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Lukas',
		},
	}, {
		id: 'm7',
		content: 'Big Data is really interesting. Cannot wait to go through all the material.',
		createdAt: '2022-10-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}]
}

