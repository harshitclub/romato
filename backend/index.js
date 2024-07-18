const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoutes");
const dbConnect = require("./helpers/db");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Sever started at port: ${PORT}`);
  dbConnect();
});
