require("dotenv").config();
const express = require("express");
const app = express();

// port
const port = _PORT;

// Express setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes
app.use("/api", rootRoutes);

//server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

