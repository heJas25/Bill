const express = require("express");
const authroute = require("./routes/auth.js");
const sequelize = require("./database/db.js");

const app = express();
const port = 3000;


app.use(express.json());//request yjiw json data

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authroute);

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced successfully");
  app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`);
  });
}).catch((error) => {
  console.log(error);
})





