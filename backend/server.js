var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", require("./routes/user.route"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((error) => {
    console.error("Data base Connectivity Issue ", error);
  });

app.get("/api", (req, res) => {
  res.send("API is Runing");
});

app.listen(process.env.PORT, () =>
  console.log("The Server Runing on port number", process.env.PORT)
);
