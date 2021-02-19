const toNumber = (str) => str.split(":")[0] * 60 + Number(str.split(":")[1]);

const isInRange = (eventRange, from, to) => {
	const eventStart = toNumber(eventRange.from);
	const eventEnd = toNumber(eventRange.to);
	return toNumber(from) >= eventStart && toNumber(to) <= eventEnd;
};

export default isInRange;
