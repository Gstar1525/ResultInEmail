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
    const { enrollnmentID, pass } = req.body
    const user = data.user
    if (user.student[enrollnmentID] && user.student[enrollnmentID].password == pass) {
        res.json({ message: `Authenticated`, result: true })
    } else {
        res.send({ message: 'No user found', result: false })
    }
}

const register = (req, res) => {
    const { enrollnmentID } = req.body
    data.user.student[enrollnmentID] = req.body
    res.send({ success: true, enrollnmentID: data.user.student[enrollnmentID].email })
}

const result = (_, res) => {
    res.json(Object.keys(data.result).filter(key => Object.keys(data.result[key]).length !== 0 ))
}

const sendMail = async (req, res) => {
    const { sem } = req.body
    let { result, user } = data
    const { student } = user

    result = result[parseInt(sem)]

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "gstar1525@gmail.com",
            pass: process.env.pass,
        },
    });

    for (const [enrollnmentID, res] of Object.entries(result)) {
        console.log(student[enrollnmentID].email);
        console.log(res);
        let info = await transporter.sendMail({
            from: 'gstar1525@gmail.com',
            to: student[enrollnmentID].email,
            subject: "RTMNU Result In Email Test 3",
            text: "Hello world?",
            html: `<p>${JSON.stringify(res)}</p>`,
        });
    
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        console.log("Message sent: %s", info.messageId);
    }
    res.send(`<p>${JSON.stringify(data.result[parseInt(sem)])}</p>`)
}

module.exports = { studentLogin, adminLogin, result, register, sendMail }