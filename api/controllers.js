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
    const { enrollmentID, pass } = req.body
    const user = data.user
    if (user.student[enrollmentID] && user.student[enrollmentID].password == pass) {
        res.json({ message: `Authenticated`, result: true })
    } else {
        res.send({ message: 'No user found', result: false })
    }
}

const register = (req, res) => {
    const { enrollmentID } = req.body
    data.user.student[enrollmentID] = req.body
    res.send({ success: true, enrollmentID: data.user.student[enrollmentID].email })
}

const result = (_, res) => {
    res.json(Object.keys(data.result).filter(key => Object.keys(data.result[key]).length !== 0))
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
            user: process.env.email,
            pass: process.env.password,
        },
    });

    for (const [enrollmentID, rslt] of Object.entries(result)) {

        const style = `style="border: 2px black solid; padding: 8px;"`
        let rows = `
        <tr ${style}>
        <th ${style}>Subject</th>
        <th ${style}>Total Marks</th>
        <th ${style}>Marks</th>
        </tr>
        `
        rslt.forEach(row => {
            rows += getRow(style, row)
        });

        const mail = `
            <table style="border-collapse: collapse; text-align: center;">
            <tbody>
            ${rows}
            </tbody>
            </table>
        `

        let info = await transporter.sendMail({
            from: 'gstar1525@gmail.com',
            to: student[enrollmentID].email,
            subject: "RTMNU Result In Mail",
            text: "Hello world?",
            html: mail,
        });

        console.log(student[enrollmentID].email);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        console.log("Message sent: %s", info.messageId);
    }
    res.send(`<p>${JSON.stringify(data.result[parseInt(sem)])}</p>`)
}

const updateStudent = (req, res) => {
    const { enrollmentID } = req.body
    data.user.student[enrollmentID] = req.body
    res.send({ success: true, studentData: data.user.student[enrollmentID] })
}

const getStudent = (req, res) => {
    const { enrollmentID } = req.body
    res.send({ success: true, studentData: data.user.student[enrollmentID] })
}

const getRow = (style, { name, totalmarks, marks }) => {
    return `
        <tr ${style}>
            <td ${style}>${name}</td>
            <td ${style}>${totalmarks}</td>
            <td ${style}>${marks}</td>\
        </tr>
    `
}


module.exports = { studentLogin, adminLogin, result, register, sendMail, updateStudent, getStudent }