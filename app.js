const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "jonny-heroku/dist")));

app.use(cors());
app.get("*", (req, res) => {
  res.sendFile(path.resolve("jonny-heroku/dist/index.html"));
});

app.listen(PORT, () => console.log(`Server run on por ${PORT}`));
