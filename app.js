require("dotenv").config();
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const apiRoutes = require("./routes/api");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
