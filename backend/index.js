const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
// app.use("/",router);
app.use(express.json({ limit: "500mb" }));


const PORT = process.env.PORT || 8080;
//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  cpassword: String,
  image: String,
});

//model
const userModel = mongoose.model("user", userSchema);

app.get("/user", async (req, res) => {
  const data = await userModel.find({});
  res.send(JSON.stringify(data));
});
//MONGODB_URL = "mongodb+srv://mahekpatel:mahek2003@cluster0.k5tbgry.mongodb.net/DFEcom?retryWrites=true&w=majority"

// api
app.get("/", (req, res) => {
  res.send("Server is Running");
});

//SignIn api
app.post("/SignIn", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  userModel.findOne({ email: email }, (err, result) => {
    console.log(result);
    console.log(err);
    if (result) {
      res.send({
        //status: "false",
        message: "Email id is already register",
        alert: false,
      });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({
        // status: "true",
        message: "Successfully Sign In",
        alert: true,
      });
    }
  });
});

//Login api
app.post("/Login", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  userModel.findOne({ email: email }, (err, result) => {
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      res.send({
        message: "Login Successfully ! ",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "It seems that you haven't SignIn with this Email id",
        alert: false,
      });
    }
  });
});

//Product section

const schemaProduct = mongoose.Schema({
  category: String,
  name: String,
  price: String,
  file:String,
  image: String,
  description: String,
});
const productModel = mongoose.model("items", schemaProduct);

//Save Product in database
//api
app.post("/uploadProduct", async (req, res) => {
  console.log(req.body);
  const data = await productModel(req.body);
  const datasave = await data.save();
  res.send({ message: "Uploaded Successfully !" });
});

//
app.get("/items", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});

//
app.post("/deleteItems", async (req, res) => {
  // const { name } = req.body;
  const { name } = req.body;
  try {
    productModel.deleteOne({ name: name }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "OK", data: "Delete" });
  } catch (error) {
    console.log(error);
  }
})


//ordre schema
const statusSchema = mongoose.Schema({
  name: String,
  email: String,
  readed: String,
  read: String,
  // amount: String,
});
//model
const statusModel = mongoose.model("status", statusSchema);

//api
app.post("/status", async (req, res) => {
  console.log(req.body);
  const data = await statusModel(req.body);
  const statussave = await data.save();
  res.send({ message: "Status Updated Successfully !" });
});

//
app.get("/statusData", async (req, res) => {
  const data = await statusModel.find({});
  res.send(JSON.stringify(data));
});

app.listen(PORT, () => console.log("Server is Running at port : " + PORT));
