let express = require('express');
let app = express();
let responses = [
	'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes definitely',
	'You may rely on it',
	'As I see it yes',
	'Most likely',
	'Outlook good',
	'Yes',
	'Signs point to yes',
	'Reply hazy try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again',
	"Don't count on it",
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful'
];

app.get('/greeting/', (request, response) => {
	response.send('Hello, Stranger!');
});
app.get('/greeting/:name', (request, response) => {
	response.send(`Hello, ${request.params.name}!`);
});
app.get('/tip/:total/:percentage', (request, response) => {
	response.send(
		`${calculateTip(request.params.total, request.params.percentage)}`
	);
});
app.get('/magic/:question', (request, response) => {
	response.send(
		`<p>${request.params.question}</p> <p>${
			responses[randomNumber(responses.length)]
		}</p>`
	);
});
function randomNumber(max) {
	return Math.floor(Math.random() * max);
}
function calculateTip(total, percentage) {
	return total * (percentage / 100);
}
app.listen(9000);
