let signEmail = document.querySelector("#email")
let signName = document.querySelector("#text")
let signPassword = document.querySelector("#password")
let signBalance = document.querySelector("#number")
let signBtn = document.querySelector("#signBtn")
let orders
let url = "http://localhost:3000/users"

signBtn.addEventListener("click", function (e) {
    e.preventDefault()
    //empty
    if (signName.value == false || signPassword.value == false || signEmail.value == false || signBalance.value < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Provide details',
            text: 'Please fill all required fields',
        })
    } 
    //name length
    else if (signName.value.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Username',
            text: 'Username must be at least 3 characters long',
        })
    }
    //balance
    else if (signBalance.value < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Balance',
            text: 'Balance cannot be less than 0',
        })
    }
    //uppercase 
    else if (!/[A-Z]/.test(signPassword.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Password',
            text: 'Password must contain at least one uppercase letter',
        })
    }
    //all correct
    else {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.some(user => user.username === signName.value)) {
                    Swal.fire({
                        icon: 'error',
                        title: 'This username has already taken',
                        text: 'Please choose another username',
                    })
                } else {
                    fetch(url, {
                        method: "POST",
                        body: JSON.stringify({
                            "username": signName.value,
                            "password": signPassword.value,
                            "email": signEmail.value,
                            "balance": signBalance.value,
                            "orders": "test"
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    })
                    window.location.href = './login.html'
                }
            })
    }
});
