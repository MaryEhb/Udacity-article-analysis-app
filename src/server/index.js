const path = require("path");
const express = require("express");
const fetchAPI = require("./API");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.post("/userUrl", async (req, res) => {
  const url = req.body;

  try {
    const apiData = await fetchAPI(url);
    res.status(200).send(JSON.stringify(apiData));
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(9009, function () {
  console.log(`App listening on port 9009`);
});
