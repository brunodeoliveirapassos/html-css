document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação
    // Por exemplo:
    if (username === 'usuario' && password === 'senha') {
        alert('Login bem-sucedido!');
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});
