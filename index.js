const express = require("express");
const app = express();
const port = 3000;
require("./config/prisma");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.use("/", require("./routes/start"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
