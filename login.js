function login(username, password) {
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        return "Login bem-sucedido!";
    } else {
        return "Nome de usuário ou senha inválidos.";
    }
}

module.exports = login;