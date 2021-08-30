const express = require("express");
require("dotenv/config");
const PORT = process.env.PORT || 8000;
const userRoutes = require("./routes/api/user");
const postRoutes = require("./routes/api/posts");
const authMiddleware = require("./middlewares/auth");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/posts", authMiddleware, postRoutes);

app.listen(PORT, () => console.log(`Server Running On ${PORT}`));
