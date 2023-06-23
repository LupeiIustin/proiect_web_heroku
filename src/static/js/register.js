const formRegister = document.getElementById('signupform')

formRegister.addEventListener('submit', userRegister)

async function userRegister(event) {
    event.preventDefault()

    // form data
    const username = document.getElementById('upname').value
    const password1 = document.getElementById('uppswd').value
    const email = document.getElementById('upemail').value
    const password2 = document.getElementById('uppswd2').value

    console.log("[register]", username, password1, email, password2)

    await fetch('/register-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password1,
            email,
            password2
        })
    }).then(res => {
        return res.json()
    }).then(json => {
        console.log(`http://localhost:5500${json.route}`)
        window.location.href = json.route
        window.alert(json.message)
    })

}