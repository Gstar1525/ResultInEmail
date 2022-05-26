const user = {
    admin: {
        "admin@gmail.com": {
            email: "admin@gmail.com",
            password: "admin@123"
        },
    },
    student: {
        "200200248": {
            name: "pranjali bramhankar",
            email: "pranjalibramhankar14@gmail.com",
            password: "student@123",
            enrollmentID: "200200248",
            semester: "2",
            year: "1"
        },
        "200200249": {
            name: "amisha jangilwar",
            email: "amishajangilwar@gmail.com",
            password: "student@123",
            enrollmentID: "200200249",
            semester: "2",
            year: "1"
        },
        "200200250": {
            name: "gourav kolhatkar",
            email: "work.gouravk@gmail.com",
            password: "student@123",
            enrollmentID: "200200250",
            semester: "2",
            year: "1"
        },
        "200200251": {
            name: "sagar",
            email: "sagar@gmail.com",
            password: "student@123",
            enrollmentID: "200200251",
            semester: "4",
            year: "2"
        },
        "200200252": {
            name: "ninad",
            email: "ninad@gmail.com",
            password: "student@123",
            enrollmentID: "200200252",
            semester: "4",
            year: "2"
        },
        "200200253": {
            name: "ninja",
            email: "ninja@gmail.com",
            password: "student@123",
            enrollmentID: "200200253",
            semester: "6",
            year: "3"
        },
        "200200254": {
            name: "saurabh",
            email: "saurabh@gmail.com",
            password: "student@123",
            enrollmentID: "200200254",
            semester: "6",
            year: "3"
        },
        "200200255": {
            name: "chakku",
            email: "chakku@gmail.com",
            password: "student@123",
            enrollmentID: "200200255",
            semester: "8",
            year: "4"
        },
        "200200256": {
            name: "roshan",
            email: "roshan@gmail.com",
            password: "student@123",
            enrollmentID: "200200256",
            semester: "8",
            year: "4"
        },
        "200200257": {
            name: "utkarsha",
            email: "utkarsha@gmail.com",
            password: "student@123",
            enrollmentID: "200200257",
            semester: "8",
            year: "4"
        },
        "200200258": {
            name: "utkarsh",
            email: "utkarsh@gmail.com",
            password: "student@123",
            enrollmentID: "200200257",
            semester: "1",
            year: "1"
        }
    }
}

const result = {
    1: {
        200200258: [
            {
                name: "maths",
                totalmarks: 100,
                marks: 75,
            },
            {
                name: "data sturcture",
                totalmarks: 100,
                marks: 95,
            },
            {
                name: "DBMS",
                totalmarks: 100,
                marks: 75,
            }
        ],
    },
    2: {
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
        ],
        200200250: [
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
    3: {},
    4: {
        200200251: [
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
        ],
        200200252: [
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
    },
    5: {},
    6: {
        200200253: [
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
        200200254: [
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
    7: {},
    8: {
        200200255: [
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
        200200256: [
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
        ],
        200200257: [
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
    }
}


module.exports = {
    user, result
}