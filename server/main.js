require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const session = require("express-session");
const app = express();

// port
const port = process.env._PORT;

// Express setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env._SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Check DB
async function checkDB() {
  try {
    await prisma.$connect();
    console.log('Koneksi Prisma ke database berhasil');
  } catch (error) {
    console.log('Koneksi Prisma gagal:', error);
  }
}

//routes
require("./src/routes")(express, app);

//server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  checkDB();
});

