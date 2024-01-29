document.addEventListener('DOMContentLoaded', () => {

const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
  
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered) {
        return alert('Esse email já foi utilizado para cadastro de outra conta!');
    }
    Users.push({ name: name, email: email, password: password });
    localStorage.setItem('users', JSON.stringify(Users));
    openModal();
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
});
// Função para abrir o modal  
    function openModal() {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('modal').style.display = 'block';
    }
    // Função para fechar o modal
    function closeModal() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('modal').style.display = 'none';
      }
});
