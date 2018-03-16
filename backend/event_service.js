const EventService = function (UUIDGenerator) {
	const $ = this;
	const events = [
		{
			id: "4025e421-7346-4e4e-a0ef-88fae8550ca9",
			title: 'Docker Workshop',
			detail: 'Linuxing in Lonodon ',
			date: '2017-11-21'
		},
		{
			id: "2f03bf62-beba-4e97-a8af-6c25740a47db",
			title: 'WinOps #17',
			detail: 'WinOps London',
			date: '2017-11-21'
		},
		{
			id: "34888287-9688-488c-94f3-1caee2c796ae",
			title: 'Docker London',
			date: '2017-11-13'
		}
	];

	$.addEvent = function (event) {
		event.id = UUIDGenerator();
		events.push(event);
	};

	$.deleteEvent = function (eventId) {
		const index = $.findIndex(eventId);
		if (index > -1) {
			events.splice(index, 1);
			return true;
		}
		return false;
	};

	$.getAllEvents = function () {
		return events;
	};

	$.getEvent = function (eventId) {
		const index = $.findIndex(eventId);
		if (index !== -1) {
			return events[index];
		}
		return null;
	};

	$.findIndex = function (eventId) {
		return events.findIndex(x => x.id === eventId);
	};

	return $;
};

module.exports = EventService;