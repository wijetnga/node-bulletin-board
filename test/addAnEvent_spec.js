var assert = require('assert');
const request = require("request");
const server = require("../server.js");

const base_url = "http://localhost:8080"

describe("Event", function () {
	after(function () {
		server.shutdown();
	});

	it("should create an event", function (done) {
		request.post(`${base_url}/bulletin-board/api/events`, {
			title: "Foo",
			detail: "Bar",
			date: "10/10/2010"
		}, function (error, response) {
			assert.equal(response.statusCode, 200);
			done();
		}, 1);
	});

	it("should get all event", function (done) {
		request(`${base_url}/bulletin-board/api/events`, function (error, response, body) {
			const responseJSON = JSON.parse(body);
			assert.equal(responseJSON.length, 3);
			done();
		}, 1);
	});
});