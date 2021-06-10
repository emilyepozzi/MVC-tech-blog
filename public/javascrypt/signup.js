async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').nodeValue.trim();
    const email = document.querySelector('#email-signup').nodeValue.trim();
    const password = document.querySelector('#password-signup').nodeValue.trim();
    const twitter = document.querySelector('#twitter-signup').nodeValue.trim();
    const github = document.querySelector('#github-signup').nodeValue.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                twitter,
                github,
                password
            }),
            headers: { 'Content-Type': 'application.json' }
        });

        //response
        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);