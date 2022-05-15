const user = {
    admin: {
        "admin@gmail.com": {
            email: "admin@gmail.com",
            password: "admin@123"
        },
    },
    student: {
        "pranjalibramhankar@gmail.com": {
            email: "pranjalibramhankar@gmail.com",
            password: "student@123",
            enrollnmentID: "200200248",
            semester: "5",
            year: "3"
        },
        "gouravkolhatkar@gmail.com": {
            email: "gouravkolhatkar@gmail.com",
            password: "student@123",
            enrollnmentID: "200200249",
            semester: "8",
            year: "4"
        },
        "amisha@gmail.com": {
            email: "amisha@gmail.com",
            password: "student@123",
            enrollnmentID: "200200250",
            semester: "5",
            year: "3"
        }
    }
}

const result = {
    3: {
        200200248: [
            {
                name: "maths",
                totalmarks: 100,
                marks: 80,
            },
            {
                name: "data sturcture",
                totalmarks: 100,
                marks: 85,
            },
            {
                name: "DBMS",
                totalmarks: 100,
                marks: 70,
            }
        ],
        200200249: [
            {
                name: "maths",
                totalmarks: 100,
                marks: 60,
            },
            {
                name: "data sturcture",
                totalmarks: 100,
                marks: 80,
            },
            {
                name: "DBMS",
                totalmarks: 100,
                marks: 90,
            }
        ]
    },
    4: {
        200200250: [
            {
                name: "maths",
                totalmarks: 100,
                marks: 80,
            },
            {
                name: "data sturcture",
                totalmarks: 100,
                marks: 85,
            },
            {
                name: "DBMS",
                totalmarks: 100,
                marks: 70,
            }
        ]
    }
}


module.exports = {
    user, result
}