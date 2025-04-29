const login = require('./login');

test('retorna "Login bem-sucedido!" se as credenciais forem válidas', () => {
    const result = login('admin', '1234');
    expect(result).toBe('Login bem-sucedido!');
});

test('retorna "Nome de usuário ou senha inválidos." para nome de usuário inválido', () => {
    const result = login('user', '1234');
    expect(result).toBe('Nome de usuário ou senha inválidos.');
});

test('retorna "Nome de usuário ou senha inválidos." para senha inválida', () => {
    const result = login('admin', '4321');
    expect(result).toBe('Nome de usuário ou senha inválidos.');
});

test('retorna "Nome de usuário ou senha inválidos." para nome de usuário e senha inválidos', () => {
    const result = login('user', '4321');
    expect(result).toBe('Nome de usuário ou senha inválidos.');
});

test('retorna "Nome de usuário ou senha inválidos." para nome de usuário e senha vazios', () => {
    const result = login('', '');
    expect(result).toBe('Nome de usuário ou senha inválidos.');
});