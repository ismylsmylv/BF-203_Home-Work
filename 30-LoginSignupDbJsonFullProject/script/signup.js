let signEmail = document.querySelector("#email");
let signName = document.querySelector("#text");
let signPassword = document.querySelector("#password");
let signBalance = document.querySelector("#number");
let signBtn = document.querySelector("#signBtn");
let orders;
let url = "http://localhost:3000/users";

signBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Empty fields check
    if (!signName.value || !signPassword.value || !signEmail.value || signBalance.value < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Provide details',
            text: 'Please fill all required fields',
        });
    } 
    // Name length check
    else if (signName.value.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Username',
            text: 'Username must be at least 3 characters long',
        });
    } 
    // Balance check
    else if (signBalance.value < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Balance',
            text: 'Balance cannot be less than 0',
        });
    } 
    // Uppercase check
    else if (!/[A-Z]/.test(signPassword.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Password',
            text: 'Password must contain at least one uppercase letter',
        });
    } 
    // All correct
    else {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.some(user => user.username === signName.value)) {
                    // Username is already taken
                    Swal.fire({
                        icon: 'error',
                        title: 'Username taken',
                        text: 'Please choose another username',
                    });
                } else {
                    // Username is available, proceed with registration
                    return fetch(url, {
                        method: "POST",
                        body: JSON.stringify({
                            "username": signName.value,
                            "password": signPassword.value,
                            "email": signEmail.value,
                            "balance": signBalance.value,
                            "orders": [] // Initialize orders as an empty array
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    });
                }
            })
            .then(response => {
                if (response.ok) {
                    // Registration successful, redirect to login page
                    window.location.href = './login.html';
                } else {
                    // handle registration failure
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration failed',
                        text: 'Please try again later',
                    });
                }
            })
            .catch(error => {
                console.error('Error during registration:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration error',
                    text: 'Please try again later',
                });
            });
    }
});
