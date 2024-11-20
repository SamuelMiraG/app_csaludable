const logoutButton = document.getElementById('logout');

const user = JSON.parse(localStorage.getItem('login_success')) || false; 
if (user) {
    logoutButton.style.display = 'block'; 
} else {
    logoutButton.style.display = 'none';
}

logoutButton.addEventListener('click', () => {
    alert('Hasta pronto');
    localStorage.removeItem('login_success'); 
    window.location.href = 'index.html';
});


const login2 = document.getElementById('login2');
const signup2 = document.getElementById('signup2');
if (user) {
    login2.style.display = 'none'; 
    signup2.style.display = 'none'; 
} else {
    login2.style.display = 'block'; 
    signup2.style.display = 'block'; 
}


window.addEventListener('load', () => {
    const mensaje = document.querySelector('#mensaje');
    const username = JSON.parse(localStorage.getItem('login_success')); 

    if (username) {
        mensaje.textContent = `¡Bienvenido! ${username.name}`;
    }
});



    
    