const express = require("express");
const app = express();

app.use(express.json());

//routes
app.use(require("./routes/health"));
app.use(require("./routes/hello"));

app.listen(3001,() => {
  console.log('Node API running on port 3001');
});
