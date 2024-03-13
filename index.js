const express = require("express");
const app = express();
const data = require("./models/data.json");
const personsRouter = require("./routes/persons")

const PORT = 3000;

app.use(express.json())
app.use("/", personsRouter);
app.use("/persons", personsRouter);
app.use("/persons", personsRouter);

app.listen(PORT, () => console.log(`server runing on port ${PORT}`))