const express = require('express');

const app = express();

app.get("/:first/:middle/:surname", (req, res) => {
	let fn = req.params.first;
	let mid = req.params.middle;
	let sn = req.params.surname;

	res.type("application/xml");

	res.send(`<xml><first_name>${fn}</first_name><middle>${mid}</middle><last_name>${sn}</last_name></xml>`)
})

app.listen(3000);