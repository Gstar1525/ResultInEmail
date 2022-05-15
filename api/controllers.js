const data = require("./model.js")
const nodemailer = require("nodemailer");

const adminLogin = (req, res) => {
    const { email, pass } = req.body
    const user = data.user
    if (user.admin[email] && user.admin[email].password == pass) {
        res.json({ message: `Authenticated`, result: true })
    } else {
        res.send({ message: 'No user found', result: false })
    }
}

const studentLogin = (req, res) => {
    const { email, pass } = req.body
    const user = data.user
    console.log(email, pass);
    // console.log(user.student);
    if (user.student[email] && user.student[email].password == pass) {
        res.json({ message: `Authenticated`, result: true })
    } else {
        res.send({ message: 'No user found', result: false })
    }
}

const register = (req, res) => {
    const { email } = req.body
    data.user.student[email] = req.body
    res.send({ success: true, email: data.user.student[email].email })
}

const result = (_, res) => {
    res.json(data.result)
}

const sendMail = async (_, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "gstar1525@gmail.com",
            pass: process.env.pass,
        },
    });

    let info = await transporter.sendMail({
        from: 'gstar1525@gmail.com',
        to: "pranjalibramhankar14@gmail.com",
        subject: "RTMNU Marks 2",
        text: "Hello world?",
        html: `<p>${JSON.stringify(data.result[3][200200248])}</p>`,
    });

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    console.log("Message sent: %s", info.messageId);
    res.send(`<p>${JSON.stringify(data.result[3][200200248])}</p>`)
}

module.exports = { studentLogin, adminLogin, result, register, sendMail }