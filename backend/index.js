import express from "express";
import adminRouter from "./routes/admin.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productsRouter from "./routes/products.js";

dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check if the required environment variables are defined
if (!process.env.DATABASE) {
  console.error("DATABASE environment variable is not defined");
  process.exit(1); // Exit the application with an error code
}

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE connected successfully😊");
  })
  .catch((error) => {
    console.error("Connecting to database failed😥");
    console.error(error);
  });

app.use("/api/admin", adminRouter);
app.use("/api/products", productsRouter);

const PORT = process.env.PORT || 3000; // Use the value from the environment variable or default to 3000
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
