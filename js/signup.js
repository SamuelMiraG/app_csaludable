const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const lastname = document.querySelector('#lastname').value; 
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const Users = JSON.parse(sessionStorage.getItem('users')) || []; 
    const isUserRegistered = Users.find(user => user.email === email);
    
    if (isUserRegistered) {
        return alert('El usuario ya está registrado!');
    }

    Users.push({ name: name, lastname: lastname, email: email, password: password });
    sessionStorage.setItem('users', JSON.stringify(Users)); 

    alert('Registro Exitoso!');
    window.location.href = 'login.html';
});