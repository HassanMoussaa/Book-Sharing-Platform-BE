const express = require("express")
const app = express();
require("dotenv").config()
const cors = require("cors");
const mongoDb = require("./configs/mongodb.connection");


app.use(cors());
// read json
app.use(express.json())
app.use('/images', express.static('images/post_images'));

const usersRoutes = require("./routes/users.route")
app.use("/users", usersRoutes)

const authRoutes = require("./routes/auth.route")
app.use("/auth", authRoutes)

const bookRoutes = require("./routes/book.route")
app.use("/books", bookRoutes)

app.listen(8000, (err) => {
  if (err) {
    throw err
  }
  mongoDb()

 
  console.log("server is running on port: ", 8000)
})