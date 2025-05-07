/**
 * @typedef {object} LoginResponse
 * @property {string} accessToken token para acessar a api.
 */

/**
 * Função para login no uwufufu.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<LoginResponse>}
 */
export function login(email, password) {
    /**
     * @type {RequestInit}
     */
    const opts = {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }

    return fetch("https://api.uwufufu.com/v1/auth/login", opts)
        .then(function (res) {
            return res.json()
        })
}