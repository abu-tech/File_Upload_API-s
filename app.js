const express = require("express");
const apiRoute = require("./routes/apiRoute");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.use("/", apiRoute);

app.get("*", (req, res) => {
    res.json({
        message: "This is not the working url"
    })
})

module.exports = app;
