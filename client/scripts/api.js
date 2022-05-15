const adminLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = Object.fromEntries(formData)
    const response = await fetch("http://localhost:5000/adminlogin", {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
        body: JSON.stringify({ email: credentials.email, pass: credentials.password }),
        method: "POST",
    })
    const data = await response.json()
    if (data.result) {
        window.location.href = "./Admindashboard.html";
        console.log(data);
    } else {
        console.log(data);
    }
}

const studentLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = Object.fromEntries(formData)
    const response = await fetch("http://localhost:5000/studentlogin", {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
        body: JSON.stringify({ email: credentials.email, pass: credentials.password }),
        method: "POST",
    })
    const data = await response.json()
    if (data.result) {
        window.location.href = "./Studentdashboard.html";
        console.log(data);
    } else {
        console.log(data);
    }
}

const register = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = Object.fromEntries(formData)
    const response = await fetch("http://localhost:5000/register", {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
            enrollnmentID: credentials.enrollnmentID,
            semester: credentials.semester,
            year: credentials.year
        }),
        method: "POST",
    })
    const data = await response.json()
    if (data.success) {
        window.location.href = "./Studentdashboard.html";
        console.log(data.email);
    } else {
        console.log(data);
    }
}