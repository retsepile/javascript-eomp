const mystorage = root.localStorage

function login(){
    fetch('https://calm-reef-04752.herokuapp.com/', {
    method: "POST",
    body: JSON.stringify({
        'username': document.getElementById("username").value,
        'password': document.getElementById("password").value,
    }),
    headers: {
        'Content-type': 'application/json',
    }
    }).then(response => response.json()).then(data => {
        console.log(data)
        console.log(data['access_token'])
        mystorage.setItem('jwt-token', data['access_token'])
    });
}

function registration(){
    document.querySelector('.landing').classList.toggle('active')
}

fetch('https://calm-reef-04752.herokuapp.com/')
.then(response => response.json())
.then(data => {
    console.log(data)
})