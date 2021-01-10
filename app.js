const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
