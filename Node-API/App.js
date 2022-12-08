const express = require("express");
const app = express();
const ProductsRoutes = require("./Routes/App");
const connectDB = require("./DB/ConnectDB.js");
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Shop Mart API");
});

app.use("/api/products", ProductsRoutes);

const start = async () => {
  await connectDB();
  try {
    app.listen(PORT, () => {
      console.log(`The Server is Running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
