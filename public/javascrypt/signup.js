async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const github = document.querySelector('#github-signup').value.trim();
    // let user = {
    //     username: username,
    //     email: email,
    //     password: password
    // }
    // console.log(user)
    // console.log(email)
    // console.log(password)
    // console.log(github)
    const data = JSON.stringify({
        username: username,
        email: email,
        github: github,
        password: password
    })
    fetch('/api/users', {
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    })
        .then(function () {
            console.log("success")
        })
        .catch(err => console.log(err))
}
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);