async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const github = document.querySelector('#github-signup').value.trim();
    
    console.log(username)
    console.log(email)
    console.log(password)
    console.log(github)

    fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            email: email,
            github: github,
            password: password
        }),
        headers: { 'Content-Type': 'application.json', 'Accept': 'application/json' }
    })
    .then(function(){
        console.log("success")
    })
    .catch(err => console.log(err))

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);