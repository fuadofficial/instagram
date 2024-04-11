const alertUser = () => {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    console.log(email)
    if (email.length === 0 && password.length === 0) {
        alert("Enter Your Username")
    } else {
        alert(email)
    }
}
