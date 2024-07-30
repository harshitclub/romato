const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoutes");
const dbConnect = require("./helpers/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use(process.env.NODE_ENV !== "production" ? morgan("dev") : null); // Conditional logging
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Sever started at port: ${PORT}`);
  dbConnect();
});
