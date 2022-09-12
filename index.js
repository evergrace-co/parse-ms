export default function parseSeconds(seconds) {
	if (typeof seconds !== 'number') {
		throw new TypeError('Expected a number');
	}
	return {
		days: Math.trunc(seconds / 86400),
		hours: Math.trunc(seconds / 3600) % 24,
		minutes: Math.trunc(seconds / 60) % 60,
	};
}
