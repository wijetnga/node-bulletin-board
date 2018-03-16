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
				this.$http.post('/bulletin-board/api/event', this.event)
					.success(function (res) {
						this.events.push(this.event);
					})
					.error(function (err) {
						console.log(err);
					});
			}
		},

		deleteEvent: function (id) {
			if (confirm('Are you sure you want to delete this event?')) {
				this.$http.delete('/bulletin-board/api/event/' + id)
					.success(function (res) {
						var index = this.events.findIndex(x => x.id === id);
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