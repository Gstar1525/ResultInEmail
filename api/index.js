const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const port = 5000
const { studentLogin, adminLogin, result, register, sendMail } = require("./controllers.js")
app.use(cors("*"))
app.use(express.json());

app.post("/adminlogin", adminLogin)
app.post("/studentlogin", studentLogin)
app.post("/register", register)
app.get("/result", result)
app.get("/sendmail", sendMail)
app.listen(port, () => {
    console.log(`Listening at http://localhost:${5000}`);
})