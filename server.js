let express = require('express');
let app = express();
app.get('/greeting/', (request, response) => {
	response.send('Hello, Stranger!');
});
app.get('/greeting/:name', (request, response) => {
	response.send(`Hello, ${request.params.name}!`);
});
app.get('/tip/:total/:percentage', (request, resposne) => {
	resposne.send(
		`${calculateTip(request.params.total, request.params.percentage)}`
	);
});
function calculateTip(total, percentage) {
	return total * (percentage / 100);
}
app.listen(9000);
