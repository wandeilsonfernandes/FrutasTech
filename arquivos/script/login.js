document.addEventListener('DOMContentLoaded', () => {

// Função do Modal
function openModal() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
}  
// Função Para fazer o Login

const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuário ou senha incorretos');
    }
    localStorage.setItem('login_success', JSON.stringify(validUser))
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 1500);
})
});


