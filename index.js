const express = require("express");

const app = express();
app.use(express.json());

require("dotenv").config({ path: "./util/.env" });
const SERVER_PORT = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  console.log("home server");
  res.send("from home server");
});

app.use("/api/user", require("./routes/user"));

app.listen(SERVER_PORT, () => {
  console.log("listening on port", SERVER_PORT);
});

