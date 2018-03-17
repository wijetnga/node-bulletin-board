const EventService = function (UUIDGenerator) {
	const $ = this;
	const events = [{
		title: "Docker workshop",
		detail: "“Our workshop is a next step for you to gain some hands-on experience”.  We did a workshop for people who read about docker but wanted to get some hands-on experience. Because it can be hard to get started we did a demo to present the basics. This blog-post is a write-up of that demo. As our “test subject” we will use Ghost — a lean and mean blogging application using NodeJS ",
		date: "2018-03-31",
		id: "5d354160-d7c5-486d-bac9-70e5a21fd0d9"
	}, {
		title: "WinOps",
		detail: "The world’s only dedicated conference to 'DevOps in a Windows World'.\n\nThe conference was about discovering and sharing experiences of using products and tools within the Microsoft DevOps world such as: PowerShell, TeamCity, Octopus Deploy, Azure, Vagrant, Chocolatey, AppDynamics, ScriptRock, Chef, Puppet, Ansible, Docker etc...",
		date: "2018-02-26",
		id: "ade21de2-f9b1-4d85-91e5-98627e9913ec"
	}, {
		title: "PIPELINE: The Continuous Delivery Conference",
		detail: "PIPELINE is a one-day, not-for-profit, 'unconference' event focused on Continuous Delivery.",
		date: "2018-04-21",
		id: "fdb5c4a3-933d-466b-ad72-9151d12ae975"
	}];

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