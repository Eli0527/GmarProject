const app = require("./app");
const mongoose = require("mongoose");

const port = 3001

mongoose
  .connect(
    "mongodb+srv://elii:0527143633@cluster0.vzygx.mongodb.net/LifeStyleMenegment?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then((connection) => {
    // console.log(connection.connections);
    console.log("DB LifeStyleMenegment connected");
  });

app.listen(port, () => console.log(`Server running at  http://127.0.0.1:${port}`))