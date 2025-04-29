const createSession = require('./sessao');
const login = require('./login');

describe('Tesde de integracao: login.js e sessao.js', () => {
    test('Cria a sessao com credenciais validas', () => {
        const username = "admin";
        const password = "1234";

        const session = createSession(username, password);

        expect(session).toHaveProperty('username', username);
        expect(session).toHaveProperty('sessionId');
        expect(session).toHaveProperty('createdAt');
        expect(typeof session.sessionId).toBe('string');
        expect(session.createdAt).toBeInstanceOf(Date);
    });

    test('erro ao criar sessao com credencial invalidas', () => {
        const username = "user";
        const password = "4321";

        const result = createSession(username, password);

        expect(result).toBe("Nome de usuário ou senha inválidos.");
    });
});