// Post request function for intake of user information

function login(){
    axios.request({
        method : "POST",
        url : "https://reqres.in/api/login",
        headers : {
            'Content-Type' : 'application/JSON'
        },
        data : {
            email : document.getElementById('username').value,
            password : document.getElementById('password').value
        }
    }).then(loginSuccess).catch(loginFail);
}

// Function to create session token cookie
function loginSuccess(response){
    console.log(response.data);
    Cookies.set('sessionToken', response.data.token);
    window.location.href="/pages/homePage.html";
}

function loginFail(error){
    console.log(error);
    alert('No log in information found');
    window.location.href="'index.html";
}

document.getElementById('loginSubmit').addEventListener('click', login);