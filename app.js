const eventService = {
	el: '#events',

	data: {
		event: {title: '', detail: '', date: ''},
		events: []
	},

	ready: function () {
		this.fetchEvents();
	},

	methods: {

		fetchEvents: function () {
			var events = [];
			this.$http.get('/bulletin-board/api/events')
				.success(function (events) {
					this.$set('events', events);
					console.log(events);
				})
				.error(function (err) {
					console.log(err);
				});
		},

		addEvent: function () {
			if (this.event.title.trim()) {
				this.$http.post('/bulletin-board/api/events', this.event)
					.success(function (res) {
						this.events.push(this.event);
						console.log('Event added!');
					})
					.error(function (err) {
						console.log(err);
					});
			}
		},

		deleteEvent: function (id) {
			if (confirm('Are you sure you want to delete this event?')) {
				this.$http.delete('/bulletin-board/api/events/' + id)
					.success(function (res) {
						console.log(res);
						var index = this.events.find(x => x.id === id)
						this.events.splice(index, 1);
					})
					.error(function (err) {
						console.log(err);
					});
			}
		}
	}
};
new Vue(eventService);