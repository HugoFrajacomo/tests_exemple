const login = require('./login');

function createSession(username, password) {
    const loginMessage = login(username, password);

    if (loginMessage === "Login bem-sucedido!") {
        const session = {
            username: username,
            sessionId: generateSessionId(),
            createdAt: new Date()
        };
        return session;
    } else {
        return loginMessage;
    }
}

function generateSessionId() {
    return Math.random().toString(36).substr(2, 9);
}

module.exports = createSession;