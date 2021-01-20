const express = require("express");

const rates = require("./routes/rates");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/rates", rates);
app.use(function (req, res, next) {
  res.status(404);
  res.send("404: Page Not Found");
});


app.listen(PORT, () => console.log(`Magic is happening on PORT ${PORT}`));
