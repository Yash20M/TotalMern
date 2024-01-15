require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const serviceRouter = require("./router/service-router");
const cors = require("cors");
const adminRouter = require("./router/admin-router");

const corsOption = {
  origin: "http://localhost:5173",
  method: "GET , POST ,PUT ,DELETE , PATCH , HEAD",
  credential: true,
};
app.use(cors(corsOption));

app.use(express.json());
// This line of code adds Express middleware that parses incoming request bodies with JSON payloads. It's important to place this before any routes  that needs to handle JSON data from request body. This middleware is resposible for parsing JSON data from requests,and it should be applied at thr beginning of your middleware stack to ensure it's availablity for all subsequent route handlers.

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);
app.use(errorMiddleware);
app.use("/api/admin", adminRouter);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Zala suru at ${port}`);
  });
});
