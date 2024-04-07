const express = require("express");
const app = express();
const port = 3000;
require('./config/prisma');

app.use(express.json());

app.use("/", require("./routes/start"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

