export const formatDate = (dateString) =>
	new Date(dateString).toLocaleDateString("en", {
		weekday: "long",
		year: "numeric",
		month: "numeric",
		day: "numeric",
	});

export const smallDateFormat = (dateString) =>
	`${new Date(dateString).getDate()}.${new Date(dateString).getMonth() + 1}.`;

const getMonday = (d) => {
	const day = d.getDay(),
		diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
	return new Date(d.setDate(diff));
};

export const easistentApiFormat = (d) => {
	const date = new Date(d);
	const year = date.getFullYear().toString();
	const month = (date.getMonth() + 1).toString();
	const day = date.getDate().toString();
	return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const getWeeks = () => {
	const today = new Date();
	const currentYear = today.getFullYear();
	const yearOfFirstDay = today.getMonth() < 8 ? currentYear - 1 : currentYear;
	const firstDay = new Date(`${yearOfFirstDay}-09-01`);
	const monday = getMonday(firstDay);
	const weeks = [];
	let i = 0;
	// "2021-02-15"
	while (i < 52) {
		let sunday = new Date(monday);
		sunday.setDate(monday.getDate() + 6);
		weeks.push({
			from: easistentApiFormat(monday),
			to: easistentApiFormat(sunday),
		});
		monday.setDate(monday.getDate() + 7);
		i++;
	}
	return weeks;
};

export const getWeekFromDate = (date = new Date()) => {
	const monday = getMonday(new Date(date));
	const from = easistentApiFormat(monday);
	monday.setDate(monday.getDate() + 6);
	const to = easistentApiFormat(monday);
	return { from, to };
};
