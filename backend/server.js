const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(cors());
const userRouter = require("./routes/userRoute");

app.use(express.json());

//connected to DB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(5000, (error) => {
      if (error) console.log(error);
      console.log(`Server Running at 5000...`);
    });

    console.log("MongoDB conneted ...");
  })
  .catch((error) => {
    console.log(error);
  });

//route
app.use(userRouter);
