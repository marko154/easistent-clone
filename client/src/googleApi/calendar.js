export const googleCalanderConfig = {
	clientId:
		"356237216305-aj99kh6iibm88avuov0irr2climsruf0.apps.googleusercontent.com",
	apiKey: "AIzaSyAFaVRN6QwqvmR2XoNuDZRhtwjxPIunfJo",
	discoveryDocs: [
		"https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
	],
	scope: "https://www.googleapis.com/auth/calendar.events",
};

export const event = {
	summary: "Kill self",
	location: "800 Howard St., San Francisco, CA 94103",
	description: "A chance to hear more about Google's developer products.",
	start: {
		dateTime: "2021-03-21T09:00:00+01:00",
		timeZone: "Europe/Ljubljana",
	},
	end: {
		dateTime: "2021-03-21T17:00:00+01:00",
		timeZone: "Europe/Ljubljana",
	},
	reminders: {
		useDefault: false,
		overrides: [
			{ method: "email", minutes: 24 * 60 },
			{ method: "popup", minutes: 10 },
		],
	},
};

const timeMap = [
	{ from: "07:30", to: "08:15" },
	{ from: "08:20", to: "09:05" },
	{ from: "09:10", to: "09:55" },
	{ from: "10:00", to: "10:45" },
	{ from: "11:05", to: "11:50" },
	{ from: "11:55", to: "12:40" },
	{ from: "12:45", to: "13:30" },
	{ from: "13:35", to: "14:20" },
	{ from: "14:25", to: "15:10" },
	{ from: "15:30", to: "16:15" },
	{ from: "16:20", to: "17:05" },
	{ from: "17:10", to: "17:55" },
	{ from: "18:00", to: "18:45" },
	{ from: "18:50", to: "19:35" },
];

const getTime = (exam) => timeMap[Number(exam.period.match(/\d+/)[0]) - 1];

export const getEventsFromExams = (exams, school) => {
	const events = [];
	for (let exam of exams) {
		events.push({
			summary: `${exam.course}, ${exam.type_name}`,
			location: school,
			description: `${exam.subject}, ${exam.period}`,
			start: {
				dateTime: `${exam.date}T${getTime(exam).from}:00+02:00`,
				timeZone: "Europe/Ljubljana",
			},
			end: {
				dateTime: `${exam.date}T${getTime(exam).to}:00+02:00`,
				timeZone: "Europe/Ljubljana",
			},
			reminders: {
				useDefault: false,
				overrides: [{ method: "email", minutes: 24 * 60 }],
			},
		});
	}
	return events;
};

export const exportEventsToCalendar = (exams, school, setIsLoading) => {
	const gapi = window.gapi;
	const events = getEventsFromExams(exams.future, school);

	gapi.load("client:auth2", () => {
		gapi.client.init(googleCalanderConfig);
		gapi.client.load("calendar", "v3", () => {});
		gapi.auth2
			.getAuthInstance()
			.signIn()
			.then(() => {
				setIsLoading(true);
				const batch = gapi.client.newBatch();
				for (let event of events) {
					const request = gapi.client.calendar.events.insert({
						calendarId: "primary",
						resource: event,
					});
					batch.add(request);
				}
				batch.then(() => setIsLoading(false));
			});
	});
};
