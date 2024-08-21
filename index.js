import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Users from "./UserModel.js";
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Node mongoose server is running here..." });
});

app.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.send({ message: "Something went wrong" });
  }
});

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cxk7yn6.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Connected with the database");
  } catch (error) {
    console.log(error);
  }
};

app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
