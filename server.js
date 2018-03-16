const express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	errorHandler = require('errorhandler'),
	morgan = require('morgan'),
	routes = require('./backend'),
	UUIDGenerator = require('uuid/v4'),
	eventService = new require('./backend/event_service')(UUIDGenerator);

var app = module.exports = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use('/bulletin-board', express.static(__dirname + '/'));

var env = process.env.NODE_ENV;
if ('development' == env) {
	app.use(errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
}

if ('production' == app.get('env')) {
	app.use(errorHandler());
}

app.get('/bulletin-board', routes.index);

app.get('/bulletin-board/api/events', function (req, res) {
	res.json(eventService.getAllEvents())
});

app.post('/bulletin-board/api/event', function (req, res) {
	eventService.addEvent(req.body);
	res.json(eventService.getAllEvents());
});

app.delete('/bulletin-board/api/event/:eventId', function (req, res) {
	const result = eventService.deleteEvent(req.params.eventId);
	res.json({message: result ? 'Event successfully deleted.' : `Event with id ${req.params.eventId} does not exist.`});
});

const server = app.listen(8080);
app.shutdown = function () {
	console.log("Shutting down...")
	server.close();
};
console.log('Server started on port 8080...');