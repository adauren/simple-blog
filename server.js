const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.use("register", require("./routes/register"));
app.use("auth", require("./routes/auth"));
app.use("posts", require("./routes/posts"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
