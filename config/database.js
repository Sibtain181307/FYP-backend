import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://sibtain123:Sibtain123@cluster0.ias6b.mongodb.net/?retryWrites=true&w=majority";

const connect = () => {
  mongoose
    .connect(MONGO_URI, {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully Connected to Database");
    })
    .catch((error) => {
      console.log("Database Connection Failed...");
      console.log(error);
      process.exit(1);
    });
};

export default connect;