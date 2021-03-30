const express = require("express");
const router = require("./api");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(router);

app.listen("5000", () => console.log("Server Connected"));
