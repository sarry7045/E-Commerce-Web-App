const mongoose = require("mongoose");

// const uri =
//   "mongodb+srv://Suraj:SurajYadav@7045@cluster0.u3luz.mongodb.net/Suraj?retryWrites=true&w=majority";

const uri =
  "mmongodb+srv://Suraj:SurajYadav@7045@cluster0.u3luz.mongodb.net/?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

// mongodb+srv://Suraj:<password>@cluster0.u3luz.mongodb.net/?retryWrites=true&w=majority
