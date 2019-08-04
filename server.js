const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/register", require("./routes/register"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
